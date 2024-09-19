import React, { memo, useRef } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { marketplaces } from "../../utils/marketplaces";

export function MarketplacesHeader({
  onSelectMarketplace,
  flatListMarketplaceRef,
}: any) {
  return (
    <>
      <Text style={{ color: "black", marginVertical: 10 }}>Marketplace</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FlatList
          ref={flatListMarketplaceRef}
          keyExtractor={(item: any) => item.name.toString()}
          showsHorizontalScrollIndicator={false}
          style={{ paddingBottom: 20, paddingTop: 5 }}
          horizontal
          data={Object.values(marketplaces)}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onSelectMarketplace(item.name, index)}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderRadius: 50,
                  padding: 10,
                  marginRight: 10,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: 40 }}
                  source={item.image}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}