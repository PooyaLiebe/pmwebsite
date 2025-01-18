import axios from "axios";

export const verifyUser = async () => {
  try {
    const response = await axios.get("/verify", { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error verifying user:", error);
    return { Status: false };
  }
};
