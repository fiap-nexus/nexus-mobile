import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {}

export function Input({ ...props }: InputProps) {
  return (
    <TextInput className="items-center h-12 w-full px-4 bg-transparent border border-foreground rounded-xl mb-1 text-white" {...props} />
  );
}
