import { useMemo, useState } from "react";

import type { FontSizeTokens, SelectProps } from "tamagui";

import {
  Adapt,
  Button,
  Label,
  Select,
  Sheet,
  View,
  XStack,
  YStack,
  getFontSize,
} from "tamagui";

export function SelectDemo() {
  return (
    <YStack padding={5} gap="$4">
      <XStack ai="center" gap="$4">
        <Label htmlFor="select-demo-1" f={1} miw={80}>
          Integração
        </Label>

        <SelectDemoItem id="select-demo-1" />
      </XStack>

      <View theme={"dark"}>
        <Button>Gerar Arquivo</Button>
      </View>
    </YStack>
  );
}
export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState("apple");
  return (
    <Select
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={220}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}></YStack>
        </Select.ScrollUpButton>
        <Select.Viewport minWidth={200}>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>

            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>

                      <Select.ItemIndicator marginLeft="auto"></Select.ItemIndicator>
                    </Select.Item>
                  );
                }),

              [items]
            )}
          </Select.Group>

          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$4"}
              pointerEvents="none"
            ></YStack>
          )}
        </Select.Viewport>
        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}></YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}
const items = [{ name: "Shopee" }];
