import useAuth from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const TabLayout = () => {
  const { isSignedIn } = useAuth();

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
