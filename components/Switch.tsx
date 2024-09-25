import { Switch as NativeSwitch, useColorScheme } from "react-native";

import { colors } from "../src/styles/colors";

function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {
  const colorScheme = useColorScheme();
  // const currentTheme = colorScheme === 'dark' ? theme.dark : theme.light;

  const trackColor = props.trackColor || {
    false: colorScheme === "dark" ? colors.darkBackground : colors.background,
    true: colorScheme === "dark" ? colors.darkForeground : colors.foreground,
  };
  const thumbColor =
    props.thumbColor || colorScheme === "dark"
      ? colors.darkBackground
      : colors.background;
  const ios_backgroundColor =
    props.ios_backgroundColor || colorScheme === "dark"
      ? colors.darkBackground
      : colors.background;

  return (
    <NativeSwitch
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor}
      {...props}
    />
  );
}

export { Switch };
