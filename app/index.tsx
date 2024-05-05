import { Text, View } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

import { CountdownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/button";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <View className="items-center h-screen mt-20 px-4">
        <Image source={require("../assets/images/logo.png")} alt="" style={{ width: 120, height: 120, objectFit: "cover" }} />

        <View className="items-center space-y-4 mt-8">
          <Text className="text-3xl text-white font-bruno">Bem-Vindo</Text>
          <Text className="text-center text-base text-white font-regular">
            Cadastre-se para participar da lista de espera do nosso mais novo lançamento
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <CountdownTimer />
        </View>

        <View className="max-w-[200px] w-full mb-20 mt-5">
          <Button onPress={() => router.push("/(auth)/sign-up")}>Registre-se</Button>
        </View>
      </View>
    </View>
  );
}
