import { Toast, useToastController, useToastState } from "@tamagui/toast";

import React from "react";

import { Button, XStack, YStack } from "tamagui";

export const ToastDemo = () => {
  return (
    <YStack space alignItems="center">
      <ToastControl />

      <CurrentToast />
    </YStack>
  );
};
const CurrentToast = () => {
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <Toast
      theme={"green_active"}
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={100}
      x={100}
      opacity={1}
      scale={1}
      animation="100ms"
      viewportName={currentToast.viewportName}
    >
      <YStack>
        <Toast.Title>{currentToast.title}</Toast.Title>

        {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
      </YStack>
    </Toast>
  );
};
const ToastControl = () => {
  const toast = useToastController();

  return (
    <XStack justifyContent="center">
      <Button
        onPress={() => {
          toast.show("Salvo com sucesso!", {
            message: "Produto separado.",
          });
        }}
      >
        Show
      </Button>
    </XStack>
  );
};
