import { Avatar, Divider, Progress, Text, View } from "native-base";
import { StyleSheet } from "react-native";

export function Lista({ item }: any) {
  return (
    <>
      <View key={item} style={styles.container}>
        <View>
          <Text>ID</Text>
          <Text>{item.idERP_Lista}</Text>
        </View>
        <View>
          <Avatar bg="green.500">T</Avatar>
        </View>
        <View width={"50%"}>
          <Text style={{ marginBottom: 5 }}>Tuccihome</Text>
          <Progress
            bg="#fff"
            value={50}
            mx="1"
            _filledTrack={{
              bg: "lime.500",
            }}
          />
        </View>
      </View>

      <View alignItems={"center"}>
        <Divider bg="light.400" thickness={"1"} w={"90%"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    margin: 10,
  },
  row: {},
});
