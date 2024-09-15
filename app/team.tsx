import { Text, View } from "react-native"
import { router } from "expo-router"

import { Button } from "@/components/button"

const devTeam = [
  {
    name: "Amorgan Mendes",
    stack: "Back-End"
  },
  {
    name: "Erick Kuwahara",
    stack: "Full-Stack"
  },
  {
    name: "Guilherme Carneiro",
    stack: "Back-End"
  },
  {
    name: "Gustavo Godoi",
    stack: "Back-End"
  },
  {
    name: "Matheus Octaviano",
    stack: "Back-End"
  },
]

export default function TeamScreen() {
  return (
    <View className="flex-1">
      <View className="items-center justify-between h-screen mt-10 px-4">
        <View className="items-center my-8">
          <Text className="text-3xl text-white font-bruno uppercase">Nossos Devs</Text>
        </View>

        <View className="items-center space-y-4 w-full">
          <Text className="text-center text-base text-white font-regular">FIAP - 2TDSPN</Text>
          {devTeam.map((dev) => (
            <View key={dev.name} className="flex-row items-center justify-center h-12 w-full px-4 bg-transparent border border-foreground rounded-xl space-x-2">
              <Text className="text-white text-lg">{dev.name}</Text>
              <Text className="text-primary text-lg">•</Text>
              <Text className="text-white text-lg">{dev.stack}</Text>
            </View>
          ))}
        </View>

        <View className="items-center w-full mb-10">
          <Button onPress={() => router.back()}>Voltar</Button>
        </View>
      </View>
    </View>
  )
}
