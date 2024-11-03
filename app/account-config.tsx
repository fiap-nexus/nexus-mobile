import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { useUser } from '@clerk/clerk-react'

import { Button } from "@/components/button"
import { useEffect, useState } from "react"
import { Ionicons } from "@expo/vector-icons"

export default function TeamScreen() {
  const { user } = useUser()

  if (!user) return null

  const [username, setUsername] = useState(user.username)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setUsername(user.username)
  }, [user.username]);

  async function handleUpdateUsername() {
    try {
      if (!username) return

      await user?.update({ username })
    } catch (err) {
      console.log(err)
    } finally {
      setEdit(false)
    }
  }

  async function handleDeleteAccount() {
    try {
      await user?.delete()
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View className="flex-1">
      <View className="items-center h-screen mt-10 px-4">
        <View className="items-center my-8">
          <Text className="text-2xl text-white font-bruno uppercase">Configuração</Text>
        </View>

        {user && (
          <View
            className="items-center"
          >
            <Image source={{ uri: user.imageUrl }} className="h-[100px] w-[100px] rounded-full bg-gray mb-3" />

            <Text className="text-2xl text-white font-medium">{user.fullName}</Text>

            <Text className="text-white mb-4">Cadastrado em {user?.createdAt?.toLocaleDateString()}</Text>

            <View className="flex-row h-12 justify-center items-center w-[240px] border border-white rounded-xl pr-4 mb-6">
              {edit ? (
                <View className="relative -top-0.5 flex-1 flex-row items-center justify-center gap-x-2">
                  <TextInput
                    placeholder="Last Name"
                    value={username || ""}
                    onChangeText={setUsername}
                    className="h-12 w-[100px] pl-4 flex-1 text-white text-base"
                  />

                  <TouchableOpacity onPress={handleUpdateUsername}>
                    <Ionicons name="checkmark-outline" size={24} color={'#fff'} />
                  </TouchableOpacity>
                </View>
              ) : (
                <View className="relative -top-0.5 flex-1 flex-row items-center justify-center gap-x-2 h-12">
                  <Text className="pl-4 text-base text-white flex-1">
                    {username}
                  </Text>

                  <TouchableOpacity onPress={() => setEdit(true)}>
                    <Ionicons name="create-outline" size={24} color={'#fff'} />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <TouchableOpacity onPress={handleDeleteAccount} activeOpacity={0.8} className="h-10 justify-center items-center w-full border border-red-600 bg-red-600/20 rounded-xl px-5">
              <Text className="relative -top-0.5 text-base text-red-600 font-medium -tracking-tighter">Cancelar cadastro</Text>
            </TouchableOpacity>
          </View>
        )}

        <View className="items-center w-full mb-10 mt-auto">
          <Button onPress={() => router.back()}>Voltar</Button>
        </View>
      </View>
    </View>
  )
}
