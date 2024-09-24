import { useColorScheme } from "nativewind";
import { Button } from "../../../components/Button";

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button
      onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    >
      Mudar Tema
    </Button>
  );
}
