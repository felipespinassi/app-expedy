import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  onResetFilters: () => void;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function TopBar({ onResetFilters, setOpenModal }: Props) {
  return (
    <View
      style={{
        backgroundColor: "white",
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
    >
      <TouchableOpacity onPress={onResetFilters}>
        <Text>Limpar Filtros</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <Text>Filtros</Text>
      </TouchableOpacity>
    </View>
  );
}
