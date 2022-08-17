import { Alert, Image, View } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "native-base";

export const Login = ({ navigation }: any) => (
  <View style={styles.container}>
    <View style={styles.containerInput}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo-transparente.png")}
      />
      <Input
        size={"lg"}
        _focus={{ borderColor: "red.500", bg: "white" }}
        marginTop={5}
        w="80%"
        placeholder="Código"
        placeholderTextColor="#6b6b6b"
        variant="rounded"
        keyboardType="numeric"
      />

      <Input
        autoCapitalize="none"
        size={"lg"}
        _focus={{ borderColor: "red.500", bg: "white" }}
        marginTop={5}
        w="80%"
        placeholder="Usuário"
        placeholderTextColor="#6b6b6b"
        variant="rounded"
      />

      <Input
        size={"lg"}
        _focus={{ borderColor: "red.500", bg: "white" }}
        marginTop={5}
        w="80%"
        placeholder="Senha"
        placeholderTextColor="#6b6b6b"
        secureTextEntry={true}
        variant="rounded"
        autoCapitalize="none"
      />
    </View>
    <View style={styles.containerButton}>
      <Button
        borderRadius={50}
        style={styles.button}
        backgroundColor={"red.500"}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Login
      </Button>
    </View>
  </View>
);
