import axios from "axios";

// Set authorization token
export const setAuthorization = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Get logged in user from session storage
export const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

