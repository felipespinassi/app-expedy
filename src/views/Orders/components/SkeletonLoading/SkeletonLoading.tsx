import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "../../../../../components/Skeleton";

export default function SkeletonLoading() {
  return (
    <View className="p-2 w-screen gap-2 ">
      <View>
        <Skeleton className="w-full h-8 bg-muted dark:bg-darkMuted" />
      </View>
      <View className=" flex-row gap-2 ">
        <Skeleton className="w-20 h-20 rounded-full mb-3 bg-muted dark:bg-darkMuted " />
        <Skeleton className="w-20 h-20 rounded-full mb-3 bg-muted dark:bg-darkMuted " />
        <Skeleton className="w-20 h-20 rounded-full mb-3 bg-muted dark:bg-darkMuted " />
        <Skeleton className="w-20 h-20 rounded-full mb-3 bg-muted dark:bg-darkMuted " />
        <Skeleton className="w-20 h-20 rounded-full mb-3 bg-muted dark:bg-darkMuted " />
      </View>
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
      <Skeleton className="w-full h-24  bg-muted dark:bg-darkMuted mb-2" />
    </View>
  );
}
