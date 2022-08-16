import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as Updates from "expo-updates";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  useEffect(() => {
    reactUpdates();
  }, []);

  const reactUpdates = async () => {
    Updates.addListener((event) => {
      if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Updates.reloadAsync();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "orange" }}>Atualizando App.tsx!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
