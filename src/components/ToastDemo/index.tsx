import { Toast, useToastController, useToastState } from "@tamagui/toast";

import React, { useEffect } from "react";

import { Button, XStack, YStack } from "tamagui";

export const ToastDemo = () => {
  useEffect(() => {
    toast.hide();
  }, []);
  const toast = useToastController();
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <YStack space alignItems="center">
      <Toast
        theme={"green_active"}
        key={currentToast.id}
        duration={1500}
        enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
        exitStyle={{ opacity: 0, scale: 1, y: -20 }}
        opacity={1}
        scale={1.1}
        animation="100ms"
        viewportName={currentToast.viewportName}
      >
        <YStack>
          <Toast.Title>{currentToast.title}</Toast.Title>

          {!!currentToast.message && (
            <Toast.Description>{currentToast.message}</Toast.Description>
          )}
        </YStack>
      </Toast>
    </YStack>
  );
};
