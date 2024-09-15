import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native"

import { AccountAuth } from "@/components/account-auth"
import { SignUpForm } from "@/components/sign-up-form"

export default function SignUpScreen() {
  return (
    <KeyboardAvoidingView behavior="height" className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 flex-grow">
        <View className="items-center h-screen mt-10 px-4">
          <View className="items-center my-8">
            <Text className="text-3xl text-white font-bruno uppercase">Registro</Text>
          </View>

          <AccountAuth />

          <View className="flex-row items-center space-x-4 my-6">
            <View className="flex-1 h-0.5 bg-foreground" />
            <Text className="text-sm text-primary font-medium uppercase">Ou</Text>
            <View className="flex-1 h-0.5 bg-foreground" />
          </View>

          <SignUpForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
