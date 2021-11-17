//Objetivo retornar os dados da api
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;