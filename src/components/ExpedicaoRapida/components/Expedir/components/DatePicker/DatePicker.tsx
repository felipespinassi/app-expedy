import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Button, View } from "tamagui";

export default function DatePicker({ setValue }: any) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View width={"60%"}>
      <Button
        backgroundColor={"$white075"}
        color={"black"}
        onPress={showDatePicker}
      >
        Selecionar Data
      </Button>
      <DateTimePickerModal
        confirmTextIOS="Confirmar"
        cancelTextIOS="Cancelar"
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        timeZoneName="America/Sao_Paulo"
        mode="date"
        locale="pt_BR"
        onChange={(e) => setValue("dataCriacao_from", e)}
      />
    </View>
  );
}
