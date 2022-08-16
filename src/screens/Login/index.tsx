import { Button, TextInput } from "react-native-paper";
import { Alert, View } from "react-native";
import { styles } from "./styles";

export const Login = () => (
  <View style={styles.container}>
    <View style={styles.containerInput}>
      <TextInput
        underlineColor="red"
        mode="flat"
        selectionColor="red"
        activeUnderlineColor="red"
        style={styles.input}
        keyboardType="numeric"
        placeholder="Código"
        placeholderTextColor="#6b6b6b"
      />
      <TextInput
        mode="flat"
        underlineColor="red"
        selectionColor="red"
        activeUnderlineColor="red"
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#6b6b6b"
      />
      <TextInput
        secureTextEntry={true}
        mode="flat"
        underlineColor="red"
        selectionColor="red"
        activeUnderlineColor="red"
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#6b6b6b"
      />
    </View>
    <View style={styles.containerButton}>
      <Button
        style={styles.button}
        buttonColor="red"
        mode="contained"
        onPress={() => console.log("Logou")}
      >
        Login
      </Button>
    </View>
  </View>
);
