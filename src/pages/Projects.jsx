 
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      machinename: "Push Feeder",
      createdBy: "Pooya Payvar",
      for: "Equipment",
      equipment: "Pusher",
      duration: "24:00 Hours",
      team: "Mechanic",
      responsible: "Mehran Almasi Far",
      scheduledate: "1403/10/30 - 1403/11/02",
      requestdate: "1403/10/28",
      maintenancetype: "Critical Maintenance",
      priority: "Critical",
    },
  ]);
  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <button className="bg-gray-400 text-white outline-none py-1 px-3 mr-2 rounded text-sm hover:bg-gray-500 hover:text-white focus:outline-none">
          Cancel
        </button>
        <div className="flex items-center">
          <span className="px-3 py-1 mr-2 bg-red-600 outline-none text-white rounded text-sm">
            New Request
          </span>
          <div className="flex items-center">
            <span className="px-3 py-1 ml-2 bg-gray-400 outline-none text-white rounded text-sm">
              In Progress
            </span>
            <span className="px-3 py-1 ml-2 bg-gray-400 outline-none text-white rounded text-sm">
              Repaired
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-6 border-r border-gray-300  overflow-y-auto">
          {projectData.map((project) => (
            <h2 key={project.id} className="text-2xl font-semibold mb-4">
              {project.machinename}
            </h2>
          ))}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Created By
              </label>
              <div className="text-gray-600">
                {projectData.map((project) => (
                  <span
                    key={project.createdBy}
                    className="text-1xl font-normal"
                  >
                    {project.createdBy}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team
              </label>
              <div className="text-gray-600">
                {projectData.map((project) => (
                  <span key={project.team} className="text-1xl font-normal">
                    {project.team}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                For
              </label>
              <div className="text-gray-600">Equipment</div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Responsible
              </label>
              <div className="text-gray-600">
                {projectData.map((project) => (
                  <span
                    key={project.responsible}
                    className="text-1xl font-normal"
                  >
                    {project.responsible}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Equipment
              </label>
              <div className="text-gray-600">
                {" "}
                {projectData.map((project) => (
                  <span
                    key={project.equipment}
                    className="text-1xl font-normal"
                  >
                    {project.equipment}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Schedule Date
              </label>
              <div className="text-gray-600">
                {" "}
                {projectData.map((project) => (
                  <span
                    key={project.scheduledate}
                    className="text-1xl font-normal"
                  >
                    {project.scheduledate}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration
              </label>
              <div className="text-gray-600">
                {" "}
                {projectData.map((project) => (
                  <span key={project.duration} className="text-1xl font-normal">
                    {project.duration}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Request Date
              </label>
              <div className="text-gray-600">
                {" "}
                {projectData.map((project) => (
                  <span
                    key={project.requestdate}
                    className="text-1xl font-normal"
                  >
                    {project.requestdate}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Priority
              </label>
              <div className="text-gray-600">
                {" "}
                {projectData.map((project) => (
                  <span key={project.priority} className="text-1xl font-normal">
                    {project.priority}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Maintenance Type
              </label>
              <div className="text-gray-600 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>
                  {" "}
                  {projectData.map((project) => (
                    <span
                      key={project.maintenancetype}
                      className="text-1xl font-normal"
                    >
                      {project.maintenancetype}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
          {/* Left Section */}

          {/* Left Section Tabs */}
          <div className="flex border-b border-gray-300 mb-2">
            <button className="px-4 py-2 font-medium focus:outline-none border-b-2 border-blue-500">
              Notes
            </button>
            <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-800 focus:outline-none">
              Instructions
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Internal Notes
            </label>
          </div>
        </div>
        {/* Left Section Tabs */}

        {/* Right Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between mb-4">
            <div className="flex">
              <button className="px-3 py-1 bg-gray-400 active:bg-green-700 hover:bg-gray-500 text-white rounded text-sm mr-2">
                Send Message
              </button>
              <button className="px-3 py-1 bg-gray-400 active:bg-green-700 hover:bg-gray-500 text-white rounded text-sm mr-2">
                Log Note
              </button>
            </div>
          </div>
          <div className="flex justify-center">Today</div>
          <div className="p-4 border-t border-gray-300 flex justify-end">
            <button className="bg-gray-800 text-white px-6 py-2 rounded">
              Send
            </button>
          </div>
          {/* Right Section*/}
        </div>
      </div>
    </div>
  );
}
export default Projects;
