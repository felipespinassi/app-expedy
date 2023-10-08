import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getService } from "../../../../services/getService";
import moment from "moment";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ArquivosGerados() {
  const [Files, setFiles] = useState();
  async function fetchData() {
    try {
      const response: any = await getService("orders/file", {});
      setFiles(response.data.files);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={Files}
        renderItem={({ item }: any) => (
          <>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text>{item.status} </Text>
              <Text>
                {moment(item.createdAt).utc(true).format("DD/MM")}
                {/* {moment(item.date).utc(true).format("HH:mm")} */}
              </Text>
              <TouchableOpacity style={{ paddingTop: 5 }}>
                <AntDesign name="printer" size={20} />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
