/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport

import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const COLUMN_ORDER = ["backlog", "todo", "doing", "done"];

const Kanban = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const userRole = "user"; // Possible values: "user", "operator", "technician"
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);
    const handleChange = (e) => setIsDarkMode(e.matches);
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div
        className={`h-screen w-full ${
          isDarkMode
            ? "bg-white text-neutral-50"
            : "border-neutral-700 text-black"
        }`}
      >
        <Board isDarkMode={isDarkMode} userRole={userRole} />
      </div>
    </div>
  );
};

const Board = ({ isDarkMode, userRole }) => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="TODO"
        column="todo"
        headingColor="dark:text-yellow-200 text-yellow-500"
        cards={cards}
        setCards={setCards}
        isDarkMode={isDarkMode}
        userRole={userRole}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="dark:text-blue-200 text-blue-500"
        cards={cards}
        setCards={setCards}
        isDarkMode={isDarkMode}
        userRole={userRole}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="dark:text-emerald-200 text-emerald-500"
        cards={cards}
        setCards={setCards}
        isDarkMode={isDarkMode}
        userRole={userRole}
      />
      <BurnBarrel setCards={setCards} isDarkMode={isDarkMode} />
    </div>
  );
};

const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
  isDarkMode,
  userRole,
}) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    // Check if user role is Operator or Technician
    if (userRole === "operator" || userRole === "technician") {
      e.preventDefault();
      setActive(false);
      clearHighlights();
      return; // Prevents card move
    }

    const cardId = e.dataTransfer.getData("cardId");
    setActive(false);
    clearHighlights();
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];
      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;

      const currentColumnIndex = COLUMN_ORDER.indexOf(cardToTransfer.column);
      const newColumnIndex = COLUMN_ORDER.indexOf(column);

      // Only allow moving to a forward column
      if (newColumnIndex > currentColumnIndex) {
        cardToTransfer = { ...cardToTransfer, column };
        copy = copy.filter((c) => c.id !== cardId);
        const moveToBack = before === "-1";
        if (moveToBack) {
          copy.push(cardToTransfer);
        } else {
          const insertAtIndex = copy.findIndex((el) => el.id === before);
          if (insertAtIndex === undefined) return;
          copy.splice(insertAtIndex, 0, cardToTransfer);
        }
        setCards(copy);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active
            ? isDarkMode
              ? "bg-neutral-800/50"
              : "bg-gray-200/50"
            : "bg-transparent"
        }`}
      >
        {filteredCards.map((c) => (
          <Card
            key={c.id}
            {...c}
            handleDragStart={handleDragStart}
            userRole={userRole}
          />
        ))}
        <DropIndicator beforeId={null} column={column} />
        {column === "backlog" && (
          <AddCard column={column} setCards={setCards} />
        )}
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart, userRole }) => {
  const isDraggable = userRole !== "operator" && userRole !== "technician";
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    navigate("/projects"); // Navigate to the details page for the card
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable={isDraggable}
        onDragStart={(e) =>
          isDraggable
            ? handleDragStart(e, { title, id, column })
            : e.preventDefault()
        }
        onDoubleClick={handleDoubleClick} // Add double-click event
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards, isDarkMode }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    setCards((pv) => pv.filter((c) => c.id !== cardId));
    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : isDarkMode
          ? "border-neutral-500 bg-neutral-500/20 text-neutral-500"
          : "border-gray-500 bg-gray-500/20 text-gray-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };
    setCards((pv) => [...pv, newCard]);
    setAdding(false);
    setText(""); // Reset the input after submission
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            value={text}
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-500 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => {
                setAdding(false);
                setText(""); // Reset text on close
              }}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 rounded-sm"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-500"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

export default Kanban;
