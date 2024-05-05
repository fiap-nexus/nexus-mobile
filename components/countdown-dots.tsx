import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function CountdownDots() {
  return (
    <View className="space-y-2 w-6 items-center">
      <MaterialIcons name="fiber-manual-record" size={8} color={"#25D366"} />
      <MaterialIcons name="fiber-manual-record" size={8} color={"#25D366"} />
    </View>
  );
}
