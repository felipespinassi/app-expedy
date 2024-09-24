import { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn("flex flex-col gap-1.5, text-foreground", className)}>
      {label && <Text className={cn("text-base", labelClasses)}>{label}</Text>}
      <TextInput
        placeholderTextColor={"#6b6b6b"}
        className={cn(
          inputClasses,
          "border border-border dark:border-darkBorder py-2.5 px-4 rounded-lg bg-background dark:bg-darkBackground  text-foreground dark:text-darkForeground h-12"
        )}
        {...props}
      />
    </View>
  )
);

export { Input };
