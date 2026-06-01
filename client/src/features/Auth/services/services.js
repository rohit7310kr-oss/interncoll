import API from "../../../services/axios";

export const createUserAPI = (data) => API.post("/api/v1/auth/register", data);
