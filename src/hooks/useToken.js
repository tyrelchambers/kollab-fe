import React, { useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState(() => {
    return (
      window.localStorage.getItem("token") ||
      window.sessionStorage.getItem("token")
    );
  });

  return [token, setToken];
};
