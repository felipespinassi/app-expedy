import axios from "axios";
import { Avatar, Divider, FlatList, Progress, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Lista } from "./Lista";
import { getAccess_token } from "../../storage/getAccess_token";

export function ListaSeparacao() {
  const [listas, setListas] = useState([]);
  async function fetchData() {
    try {
      const access_token = await getAccess_token();
      const response = await axios.get(
        "https://api.expedy.com.br/expedicao/lista",
        {
          params: {
            pageSize: 20,
            access_token: access_token,
          },
        }
      );
      setListas(response.data.listas);
    } catch (error) {
      alert(error);
    }
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
