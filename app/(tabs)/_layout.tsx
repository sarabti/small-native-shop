import { useAppSelector } from "@/store/hooks";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const TabLayout = () => {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <View>
      <Text>TabLayout</Text>
    </View>
  );
};

export default TabLayout;
