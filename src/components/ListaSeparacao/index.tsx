import axios from "axios";
import { Avatar, Divider, Progress, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export function ListaSeparacao() {
  const [listas, setListas] = useState([]);
  async function fetchData() {
    const response = await axios.get(
      "https://api.expedy.com.br/expedicao/lista",
      {
        params: {
          pageSize: 5,
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXBvIjoidXNlciIsImlkIjozLCJuYW1lIjoiVXN1YXJpbyB0ZXN0ZSAxIiwibG9naW4iOiJndm0iLCJlbWFpbCI6InRlc3RlMUB0ZXN0ZS5jb20iLCJjb21wYW55IjozLCJwZXJtaXNzaW9ucyI6W10sImlhdCI6MTY3NDE3NzU3MCwiZXhwIjoxNjc0NzgyMzcwfQ.sM18W3lezc5MOxy0T8nRDQ2XaYzqdpAobPn7wyS25FY",
        },
      }
    );
    console.log(response);

    setListas(response.data.listas);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {listas.map((element: any) => {
        console.log(element.idERP_Lista);
        return (
          <>
            <View style={styles.container}>
              <View>
                <Text>ID</Text>
                <Text>{element.idERP_Lista}</Text>
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
      })}
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
