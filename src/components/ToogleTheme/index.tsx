import { useColorScheme } from "nativewind";
import { Switch } from "../../../components/Switch";

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Switch
      onValueChange={() =>
        setColorScheme(colorScheme === "dark" ? "light" : "dark")
      }
      value={colorScheme === "dark"}
    />
  );
}
