import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { statusHub } from "../../../../../../objects/statusHub";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";

export default function SelectStatusHub({ form, filters }: any) {
  const [value, setValue] = useState(filters.status_hub);

  return (
    <>
      <Text
        style={{ fontSize: 18, fontWeight: "500" }}
        className="text-foreground dark:text-darkForeground"
      >
        Status Hub
      </Text>
      <View
        style={{ padding: 10, gap: 20, paddingBottom: 30 }}
        className="bg-muted dark:bg-darkMuted rounded-md"
      >
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
                <Text
                  style={{ padding: 5 }}
                  className="text-foreground dark:text-darkForeground"
                >
                  {status.name}
                </Text>
                <Checkbox value1={value} value2={status.identifier} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
