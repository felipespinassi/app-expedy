import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { statusHub } from "../../../../../../Objects/statusHub";
import Checkbox from "../../../../../Checkbox/Checkbox";

export default function SelectStatusHub({ form }: any) {
  const [value, setValue] = useState("");

  return (
    <>
      <Text style={{ fontSize: 22, fontWeight: "500" }}>Status Hub</Text>
      {Object.values(statusHub).map((status: any) => {
        return (
          <TouchableOpacity
            key={status.id}
            onPress={() => {
              setValue(status.identifier);

              form.setValue("status_hub", status.identifier);
            }}
          >
            <View
              style={{
                paddingRight: 25,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ padding: 5 }}>{status.name}</Text>
              <Checkbox value1={value} value2={status.identifier} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
