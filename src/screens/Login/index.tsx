import { Alert, Image, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useEffect } from "react";
import axios from "axios";

export function Login({ navigation }: any) {
  return (
    // <View style={styles.container}>
    //   <View style={styles.containerInput}>
    //     <Image
    //       style={styles.image}
    //       source={require("../../../assets/logo-transparente.png")}
    //     />
    //     <Center w={"80%"}>
    //       <FormControl isRequired>
    //         <Input
    //           size={"lg"}
    //           _focus={{ borderColor: "red.500", bg: "white" }}
    //           marginTop={5}
    //           placeholder="Código"
    //           placeholderTextColor="#6b6b6b"
    //           variant="rounded"
    //           keyboardType="numeric"
    //         />
    //       </FormControl>
    //       <FormControl>
    //         <Input
    //           autoCapitalize="none"
    //           size={"lg"}
    //           _focus={{ borderColor: "red.500", bg: "white" }}
    //           marginTop={5}
    //           placeholder="Usuário"
    //           placeholderTextColor="#6b6b6b"
    //           variant="rounded"
    //         />
    //       </FormControl>
    //       <FormControl>
    //         <Input
    //           size={"lg"}
    //           _focus={{ borderColor: "red.500", bg: "white" }}
    //           marginTop={5}
    //           placeholder="Senha"
    //           placeholderTextColor="#6b6b6b"
    //           secureTextEntry={true}
    //           variant="rounded"
    //           autoCapitalize="none"
    //         />
    //         <FormControl.ErrorMessage
    //           leftIcon={<WarningOutlineIcon size="xs" />}
    //         >
    //           Atleast 6 characters are required.
    //         </FormControl.ErrorMessage>
    //       </FormControl>
    //     </Center>
    //   </View>
    //   <View style={styles.containerButton}>
    //     <Button
    //       borderRadius={30}
    //       style={styles.button}
    //       backgroundColor={"red.500"}
    //       // onPress={() => navigation.navigate("Dashboard")}
    //     >
    //       Login
    //     </Button>
    //   </View>
    // </View>
    <SafeAreaView style={{ flex: 1 }}>
      <Center w="100%" h="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Center>
            <Image
              style={styles.image}
              source={require("../../../assets/logo-transparente.png")}
            />
          </Center>
          {/* <Heading
          borderWidth={2}
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading> */}

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Código</FormControl.Label>
              <Input keyboardType="numeric" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Usuário</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="red">
              Acessar
            </Button>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
}
