import axios from "axios";

const Axios = axios.create({
  baseURL: "http://meowmessenger.app",
  withCredentials: true,
});

export default Axios;
