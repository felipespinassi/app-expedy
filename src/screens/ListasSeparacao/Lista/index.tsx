import { Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export function Lista(item: any) {
  console.log(item);
  return (
    <SafeAreaView>
      <Text>Lista de separação</Text>
    </SafeAreaView>
  );
}
