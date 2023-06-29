import { View, Text } from "react-native";
import React from "react";
import {
  Actionsheet,
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Modal,
} from "native-base";

export default function ModalFilters({ openModal, setOpenModal }: any) {
  return (
    <View>
      <Center>
        <Button onPress={openModal}>Actionsheet</Button>
        <Actionsheet isOpen={openModal} onClose={() => setOpenModal(false)}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text>Albums</Text>
            </Box>
            <Actionsheet.Item>Delete</Actionsheet.Item>
            <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
            <Actionsheet.Item>Play</Actionsheet.Item>
            <Actionsheet.Item>Favourite</Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </View>
  );
}
