import axios from "axios";
import Credentials from "../interfaces/credentials.ts";
import User from "../interfaces/user.ts";

const baseURL = "http://localhost:1337/api";

const axiosInstance = axios.create({ baseURL: baseURL });

const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getUserByID = async (_id: string) => {
  try {
    const response = await axiosInstance.get("/user/" + _id);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const registerUser = async (credentials: Credentials) => {
  try {
    const response = await axiosInstance.post("/user/register", {
      ...credentials,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const loginUser = async (credentials: Credentials) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      ...credentials,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const validateUser = async (token: string) => {
  try {
    const response = await axiosInstance.get("/user/validate", {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

const updateUser = async (_id: string, user: User) => {
  const { token } = user;
  try {
    const response = await axiosInstance.put("/user/" + _id, {
      headers: { authorization: `Bearer ${token}` },
      body: { user },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

const deleteUser = async (_id: string, token: string) => {
  try {
    const response = await axiosInstance.delete("/user/" + _id, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const user = {
  getAllUsers,
  getUserByID,
  registerUser,
  loginUser,
  validateUser,
  updateUser,
  deleteUser,
};

const api = { user };

export default api;
