import { Button, TextInput } from "react-native-paper";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

export const Login = () => (
  <View>
    <Image style={styles.image} source={require("../../../assets/icon.png")} />
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        placeholder="Código"
        placeholderTextColor="#6b6b6b"
      />
      <TextInput placeholder="Login" placeholderTextColor="#6b6b6b" />
      <TextInput placeholder="Senha" placeholderTextColor="#6b6b6b" />
    </View>
    <Button
      buttonColor="red"
      mode="contained"
      onPress={() => Alert.alert("", "Logou")}
    >
      Login
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 150,
  },
});
