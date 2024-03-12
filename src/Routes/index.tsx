import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Text } from "tamagui";
import Login from "../components/Login/Login";

export function Routes() {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        {isLogged === true ? <StackRoutes /> : <Login />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
