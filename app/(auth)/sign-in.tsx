import SafeAreaView from "@/components/SafeAreaView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isLoading, error } = useAuth();

  const handleSubmit = async () => {
    if (!username || !password) return;
    await signIn(username, password);
  };

  return (
    <SafeAreaView className="flex-1 bg-vistas-white flex flex-col justify-center items-center mx-20">
      {/* Top colored half */}
      <View className="w-full px-4">
        <Text className="text-4xl font-bold">Curator</Text>
        <Text className="text-2xl font-bold mt-4">Welcome Back!</Text>
        <Text className="text-lg mt-2">Sign in to continue</Text>
      </View>

      {/* Form card */}
      <View className="w-full px-4">
        <Input
          className="mb-4 mt-8"
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={setUsername}
        />

        <Input
          className="mb-2"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        {error ? (
          <Text className="text-destructive text-sm mb-2">{error}</Text>
        ) : null}

        <Button
          className="mt-4"
          variant="default"
          disabled={isLoading}
          onPress={handleSubmit}
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text className="text-primary-foreground">Sign In</Text>
          )}
        </Button>
      </View>
    </SafeAreaView>
  );
}
