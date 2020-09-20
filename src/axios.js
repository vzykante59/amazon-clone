import axios from "axios";

const instance = axios.create({
  //The API (Cloud Function) URL
  baseUrl: "http://localhost:5001/challenge-67650/us-central1/api",
});

export default instance;
