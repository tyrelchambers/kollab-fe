import React, { useState } from "react";
import { useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(
      window.localStorage.getItem("token") ||
        window.sessionStorage.getItem("token") ||
        ""
    );
  }, [token]);

  return {
    token,
    setToken,
  };
};
