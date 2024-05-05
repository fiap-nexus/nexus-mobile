import { Button } from "@/components/Button";
import { CountdownTimer } from "@/components/countdown-timer";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function CongratsScreen() {
  return (
    <View className="flex-1">
      <View className="items-center h-screen mt-20 px-4">
        <Image source={require("../assets/images/logo.png")} alt="" style={{ width: 120, height: 120, objectFit: "cover" }} />

        <View className="items-center space-y-4 mt-8">
          <Text className="text-2xl text-white font-bruno">Parabéns</Text>
          <Text className="text-center text-base text-white font-regular">Você entrou na lista de espera com sucesso!</Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <CountdownTimer />
        </View>

        <View className="items-center w-full mb-20 mt-5">
          <Text className="text-center text-base text-white font-regular">Te vejo no lançamento!</Text>
        </View>
      </View>
    </View>
  );
}
