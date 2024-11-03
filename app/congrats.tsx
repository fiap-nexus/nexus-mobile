import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { Image } from "expo-image"

import { Button } from "@/components/button"
import { CountdownTimer } from "@/components/countdown-timer"

export default function CongratsScreen() {
  return (
    <View className="flex-1">
      <View className="items-center h-screen mt-20 px-4">
        <Image source={require("../assets/images/logo.png")} alt="" style={{ width: 120, height: 120, objectFit: "cover" }} />

        <View className="items-center space-y-4 mt-8">
          <Text className="text-2xl text-white font-bruno uppercase">Parabéns</Text>
          <Text className="text-center text-base text-white font-regular">Você entrou na lista de espera com sucesso!</Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <CountdownTimer />
          <Text className="text-center text-base text-white font-regular mt-5">Te vejo no lançamento!</Text>
        </View>

        <View className="flex items-center w-full mb-20 mt-5 space-y-4">
          <Button onPress={() => router.push("/team")}>Conheça nossos devs</Button>

          <TouchableOpacity activeOpacity={0.8} className="justify-center items-center w-full" onPress={() => router.push("/account-config")}>
            <Text className="text-base text-white">Configurações de inscrição</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
