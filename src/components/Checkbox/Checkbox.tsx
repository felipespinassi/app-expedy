import { View, Text } from "react-native";
import React from "react";

export default function Checkbox({ value1, value2 }: any) {
  return (
    <>
      {value1 === value2 ? (
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#1890ff",
            borderRadius: 5,
          }}
        />
      ) : (
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        />
      )}
    </>
  );
}
