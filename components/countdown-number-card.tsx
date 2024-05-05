import { Text } from "react-native";
import { View } from "react-native";

interface CountdownNumberCardProps {
  number: number;
  suffix: string;
}

export function CountdownNumberCard({ number = 0, suffix }: CountdownNumberCardProps) {
  function numberText() {
    if (number && Math.sign(number) >= 0) {
      if (number.toString().length === 1) {
        return ("0" + number).slice(-2);
      } else {
        return number;
      }
    } else {
      return "00";
    }
  }
  const renderNumber = () => <Text className="text-2xl text-white font-bruno">{numberText()}</Text>;

  return (
    <View className="justify-center items-center h-[72px] w-[70px] border border-[#1C1C1C] rounded-xl ">
      {renderNumber()}
      <Text className="text-sm text-primary font-bruno">{suffix}</Text>
    </View>
  );
}
