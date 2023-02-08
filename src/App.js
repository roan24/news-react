import React, { useEffect } from "react";
import Axios from "axios";
import RootRoute from "./RootRoute";

const App = () => {
  useEffect(() => {
    Axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;
    Axios.defaults.headers.common["Content-Type"] = "application/json";
    Axios.defaults.headers.common["Accept"] = "application/json";
  }, []);
  return <RootRoute />;
};

export default App;
