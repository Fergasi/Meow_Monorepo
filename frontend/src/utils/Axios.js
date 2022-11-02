import axios from "axios";

const Axios = axios.create({
  baseURL: "https://www.meowmessenger.app",
  withCredentials: true,
});

export default Axios;
