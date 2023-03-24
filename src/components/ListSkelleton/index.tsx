import { Center, Skeleton, VStack } from "native-base";

export function ListSkelleton() {
  return (
    <Center marginTop={10} w="100%">
      <VStack w="100%" space={4}>
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
        <Skeleton speed={2} h="24" />
      </VStack>
    </Center>
  );
}
