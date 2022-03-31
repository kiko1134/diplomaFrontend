import axios from "axios";
import { toast } from "react-toastify";

class AuthService {
  login(username, password, navigate) {
    return axios
      .post("http://localhost:8081/v1/public/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("id", response.data.id);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("email", response.data.email);
          sessionStorage.setItem("phone_number", response.data.phone_number);
          sessionStorage.setItem(
            "workshop_address",
            response.data.workshop_address
          );
          sessionStorage.setItem(
            "workshop_description",
            response.data.workshop_description
          );
          sessionStorage.setItem(
            "authorities",
            response.data.authorities[0].authority
          );
          console.log(sessionStorage);
          toast.success("Login successful");
          navigate();
        }
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Login Failed");
        } else if (error.request) {
          toast.error("Server not responding");
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  logout() {
    sessionStorage.clear();
    toast.success("Logout successful");
  }
}

export default new AuthService();
