import axios from "axios";
import authHeader from "./authHeader";
import { toast } from "react-toastify";
const USER_BASE_URL = "http://localhost:8081/v1/users";

class userService {
  getWorkshops() {
    return axios
      .get("http://localhost:8081/v1/workshops", { headers: authHeader() })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }

  getServices() {
    return axios
      .get("http://localhost:8081/v1/service", { headers: authHeader() })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      })
      .catch((error) => {
        if (error.response) {
          toast.warning("You must login to search services");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  getUsers() {
    return axios.get(USER_BASE_URL, { headers: authHeader() });
  }

  registerUser(user, navigate) {
    return axios
      .post("http://localhost:8081/v1/public/register-user", user)
      .then((resp) => {
        toast.success("User Registration successful");
        navigate();
      })
      .catch((error) => {
        if (error.response) {
          toast.error("User Registration failed");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  registerWorkshop(workshop, navigate) {
    return axios
      .post("http://localhost:8081/v1/public/register-workshop", workshop)
      .then((resp) => {
        navigate();
        toast.success("Workshop Registration successful");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Workshop Registration failed");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  updateUser(id, user, navigate) {
    return axios
      .put(`http://localhost:8081/v1/users/${id}`, user, {
        headers: authHeader(),
      })
      .then((resp) => {
        navigate();
        toast.success("User profile updated successfully");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Profile update failed");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  updateWorkshop(id, workshop,navigate) {
    return axios
      .put(`http://localhost:8081/v1/workshops/${id}`, workshop, {
        headers: authHeader(),
      })
      .then((resp) => {
        navigate();
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Profile update failed");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  addServiceToWorkshop(workshopService) {
    return axios
      .post("http://localhost:8081/v1/workshops/add-service", workshopService, {
        headers: authHeader(),
      })
      .then((resp) => {
        toast.success("Added service to workshop");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Service was not added to workshop");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  editServiceToWorkshop(workshopService, navigate) {
    console.log(workshopService.workshop_id );

    return axios
      .put("http://localhost:8081/v1/workshops/update-service", workshopService, {
        headers: authHeader(),
      })
      .then((resp) => {
        navigate();
        toast.success("Service edited successfully");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Service edited unsuccessfully");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  getWorkshopServicesServiceId(id) {
    return axios
      .get(`http://localhost:8081/v1/workshops/workshop-service-id/${id}`, {
        headers: authHeader(),
      })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }

  getServiceNameById(id) {
    return axios
      .get(`http://localhost:8081/v1/service/${id}`, { headers: authHeader() })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }

  getWorkshopServices(name) {
    return axios
      .get(`http://localhost:8081/v1/workshops/workshop-services/${name}`, {
        headers: authHeader(),
      })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }

  addFavoriteService(favorite) {
    return axios
      .post("http://localhost:8081/v1/users/add-favorite-service", favorite, {
        headers: authHeader(),
      })
      .then((resp) => {
        toast.success("Added service to favorites");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Service was not added to favorites");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  deleteFavoriteService(favorite) {
    return axios
      .post("http://localhost:8081/v1/users/delete-favorite-service", favorite, {
        headers: authHeader(),
      })
      .then((resp) => {
        toast.success("Service successfully deleted");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Service was not successfully deleted");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  getUserById(id) {
    return axios
      .get(`http://localhost:8081/v1/users/${id}`, {
        headers: authHeader(),
      })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }

  createReview(review, navigate) {
    return axios
      .post("http://localhost:8081/v1/review", review, {
        headers: authHeader(),
      })
      .then((resp) => {
        navigate();
        toast.success("Review created successfully");
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Review creation failed");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  getReviews() {
    return axios
      .get("http://localhost:8081/v1/review", { headers: authHeader() })
      .then((resp) => {
        console.log({ resp });
        return resp.data;
      });
  }
}

export default new userService();
