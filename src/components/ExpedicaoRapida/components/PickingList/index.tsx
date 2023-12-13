import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'

export default function PickingList({navigation}:any) {
  return (
    <TouchableOpacity
          // onPress={() => navigation.navigate("ArquivosGerados")}
          style={{ width: "90%" }}
        >
          <Box
            height={100}
            rounded="lg"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
            px={3}
            py={1}
            style={{ marginBottom: 10, justifyContent: "space-around" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="file-text" size={24} />

              <Heading style={{ marginLeft: 10 }} fontWeight={500} size={"sm"}>
                Listas de Picking
              </Heading>
            </View>
          </Box>
        </TouchableOpacity>
  )
}