import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Text } from "tamagui";
import { Login } from "../screens/Login";
import { verifyInactiveAccess_token } from "../storage/verifyInactiveAccess_token";

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
