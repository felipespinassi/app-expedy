import { Center, Skeleton, VStack } from "native-base";

export function OrderSkelleton() {
  return (
    <Center marginTop={10} w="100%">
      <VStack w="100%" space={2}>
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
        <Skeleton speed={2} h="32" />
      </VStack>
    </Center>
  );
}
