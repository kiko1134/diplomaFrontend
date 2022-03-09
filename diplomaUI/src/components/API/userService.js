import axios from "axios";

const USER_BASE_URL = "http://localhost:8081/v1/users";

class userService {
  getUsers() {
    return axios.get(USER_BASE_URL);
  }

  registerUser(user) {
    return axios.post(USER_BASE_URL, user);
  }

  registerWorkshop(workshop) {
    return axios.post("http://localhost:8081/v1/workshops", workshop);
  }

  loginUser(loginUser) {
    return axios.post("http://localhost:8080/v1/login", loginUser);
  }
}

export default new userService();
