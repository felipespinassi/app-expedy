import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Login } from "../screens/Login";
import { verifyInactiveAccess_token } from "../storage/verifyInactiveAccess_token";
import { StackRoutes } from "./stack.routes";

export function Routes() {
  const [isLogged, setIsLogged] = useState(false);

  async function verifyLogin() {
    await verifyInactiveAccess_token(setIsLogged);
  }

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        {isLogged === true ? <StackRoutes /> : <Login />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
