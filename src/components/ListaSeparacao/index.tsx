import axios from "axios";
import { Avatar, Divider, FlatList, Progress, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Lista } from "./Lista";

export function ListaSeparacao() {
  const [listas, setListas] = useState([]);
  async function fetchData() {
    const response = await axios.get(
      "https://api.expedy.com.br/expedicao/lista",
      {
        params: {
          pageSize: 20,
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXBvIjoidXNlciIsImlkIjo1LCJuYW1lIjoiVHVjY2kgSG9tZSIsImxvZ2luIjoidHVjY2lob21lIiwiZW1haWwiOiJzaG93aG9tZWluZEBnbWFpbC5jb20iLCJjb21wYW55Ijo1LCJwZXJtaXNzaW9ucyI6W10sImlhdCI6MTY3NDE4MTYxNSwiZXhwIjoxNjc0Nzg2NDE1fQ.-4YVlAYfFWj1xc-UTIHrDsVZVhDbXsS_HQ2hNmSs82E",
        },
      }
    );

    setListas(response.data.listas);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FlatList
        data={listas}
        keyExtractor={(item: any) => item.idERP_Lista}
        renderItem={({ item }: any) => <Lista item={item} />}
      />
    </>
  );
}
