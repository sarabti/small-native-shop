import { useAppSelector } from "@/store/hooks";
import { Redirect, Stack } from "expo-router";

export default function AuthRoutesLayout() {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);

  if (isSignedIn) {
    return <Redirect href="/" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
