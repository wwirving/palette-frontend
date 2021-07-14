import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const contextData = {};

  return (
    <UserContext.Provider value={contextData}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
