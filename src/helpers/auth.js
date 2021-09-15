import { API } from "../api";
import axiosInstance from "./axiosInstance";

export const signup = async (user) => {
  await axiosInstance
    .post(`${API}/signup`, user, {
      headers: {
        Accept: "application/JSON",
        "Content-Type": "application/JSON",
      },
    })
    .then((response) => {
      console.log(response);
      return "hi";
    })
    .catch((err) => {
      console.log(err);
      return "hi";
    });
};

export const signin = (user) => {
  console.log(JSON.stringify(user));
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const aunthenticate = (user, next) => {
  if (window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(user));
    next();
  }
};

export const signout = () => {
  if (window !== "undefined") {
    localStorage.removeItem("jwt");
  }

  return axiosInstance("/signout")
    .then(() => console.log("Signout Sucessfully!"))
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (window === undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    const token = JSON.parse(localStorage.getItem("jwt"));
    return token;
  } else {
    return false;
  }
};
