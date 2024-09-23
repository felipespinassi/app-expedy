import { useColorScheme } from "nativewind";
import { Button } from "../../../components/Button";

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button
      variant={"secondary"}
      label="Mudar Tema"
      onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    >
      Toggle mode
    </Button>
  );
}
