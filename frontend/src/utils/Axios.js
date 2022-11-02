import axios from "axios";

const Axios = axios.create({
  baseURL: "https://meow-messenger-app.herokuapp.com",
  withCredentials: true,
});

export default Axios;
