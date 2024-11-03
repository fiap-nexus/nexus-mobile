import { Text, View } from "react-native"
import { router } from "expo-router"
import { useSignUp } from "@clerk/clerk-expo"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "./input"
import { Button } from "./button"

const userSchema = z.object({
  firstName: z.string().min(1, "Campo obrigatório"),
  lastName: z.string().min(1, "Campo obrigatório"),
  username: z.string().min(1, "Campo obrigatório"),
  emailAddress: z.string().min(1, "Campo obrigatório").email("Endereço de email inválido."),
  password: z.string().min(8, "Senha deve possuir no mínimo 8 caracteres"),
})

type UserSchema = z.infer<typeof userSchema>

export function SignUpForm() {
  const { isLoaded, signUp } = useSignUp()

  const { control, handleSubmit } = useForm<UserSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  })

  async function handleSignUp(data: UserSchema) {
    if (!isLoaded) return

    const { firstName, lastName, username, emailAddress, password } = data

    try {
      await signUp.create({
        firstName,
        lastName,
        username,
        emailAddress,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })

      router.push("/(auth)/confirm-email")
    } catch (err: any) {
      console.error("OAuth error: ", JSON.stringify(err))
    }
  }

  return (
    <View className="flex-1 w-full" style={{ gap: 16 }}>
      <View className="flex-row" style={{ gap: 20 }}>
        <View className="flex-1">
          <Text className="text-base text-white font-regular mb-1">
            Nome
            <Text className="text-primary"> *</Text>
          </Text>

          <Controller
            control={control}
            name={"firstName"}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input value={value} onChangeText={onChange} onBlur={onBlur} placeholder="First Name..." />
                {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
              </>
            )}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base text-white font-regular mb-1">
            Sobrenome
            <Text className="text-primary"> *</Text>
          </Text>

          <Controller
            control={control}
            name={"lastName"}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input value={value} onChangeText={onChange} onBlur={onBlur} placeholder="Last Name..." />
                {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
              </>
            )}
          />
        </View>
      </View>

      <View>
        <Text className="text-base text-white font-regular mb-1">
          Username
          <Text className="text-primary"> *</Text>
        </Text>

        <Controller
          control={control}
          name={"username"}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              <Input value={value} onChangeText={onChange} onBlur={onBlur} placeholder="Username..." />
              {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
            </>
          )}
        />
      </View>

      <View>
        <Text className="text-base text-white font-regular mb-1">
          E-mail
          <Text className="text-primary"> *</Text>
        </Text>

        <Controller
          control={control}
          name={"emailAddress"}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              <Input value={value} onChangeText={onChange} onBlur={onBlur} placeholder="Email..." />
              {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
            </>
          )}
        />
      </View>

      <View className="mb-4">
        <Text className="text-base text-white font-regular mb-1">
          Senha
          <Text className="text-primary"> *</Text>
        </Text>

        <Controller
          control={control}
          name={"password"}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
              <Input value={value} onChangeText={onChange} onBlur={onBlur} placeholder="Password..." secureTextEntry />
              {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
            </>
          )}
        />
      </View>

      <Button onPress={handleSubmit(handleSignUp)}>Registrar</Button>
    </View>
  )
}
