import API from "../../../services/axios";

export const createUserAPI = () => API.post("/api/v1/register");
