import { Alert, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

const userSchema = z.object({
  code: z.string().min(1, "Campo obrigatório"),
});

type UserSchema = z.infer<typeof userSchema>;

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const { control, handleSubmit } = useForm<UserSchema>({
    defaultValues: {
      code: "",
    },
    resolver: zodResolver(userSchema),
  });

  async function handleVerify(data: UserSchema) {
    if (!isLoaded) return;

    const { code } = data;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

      await setActive({ session: completeSignUp.createdSessionId });

      router.push("/congrats");
    } catch (err: any) {
      console.error("OAuth error: ", JSON.stringify(err));
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 flex-grow">
        <View className="items-center h-screen mt-10 px-4">
          <View className="items-center my-8">
            <Text className="text-3xl text-white font-bruno">Verificação</Text>
          </View>

          <Text className="max-w-[300px] text-center text-base text-white font-regular mb-6">
            Insira o código de verificação que lhe enviamos em seu email
          </Text>

          <View className="flex-1 w-full" style={{ gap: 16 }}>
            <View className="mb-4">
              <Text className="text-base text-white font-regular mb-1">
                Código
                <Text className="text-primary"> *</Text>
              </Text>

              <Controller
                control={control}
                name={"code"}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <Input label="Código" value={value} onChangeText={onChange} onBlur={onBlur} />
                    {error && <Text className="text-sm text-red-700 font-regular">{error.message}</Text>}
                  </>
                )}
              />
            </View>

            <Button onPress={handleSubmit(handleVerify)}>Verificar e-mail</Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
