import { useColorScheme } from "nativewind";
import { Button } from "../../../components/Button";

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button
      className=" dark:bg-red-500  bg-blue-500"
      label="Mudar Tema"
      variant="default"
      onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    >
      Toggle mode
    </Button>
  );
}
