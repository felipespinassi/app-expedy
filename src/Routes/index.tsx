import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import React from "react";
import { RightDrawerScreen } from "./drawer.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
