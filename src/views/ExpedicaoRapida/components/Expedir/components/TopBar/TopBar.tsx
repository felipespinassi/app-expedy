import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  onResetFilters: () => void;
}

export default function TopBar({ onResetFilters }: Props) {
  return (
    <View
      style={{
        width: "100%",
        height: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingRight: 15,
      }}
      className="bg-muted dark:bg-darkMuted"
    >
      <TouchableOpacity onPress={onResetFilters}>
        <Text className="text-foreground dark:text-darkForeground">
          Limpar Filtros
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => setOpenModal(true)}>
        <Text>Filtros</Text>
      </TouchableOpacity> */}
    </View>
  );
}
