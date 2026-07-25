import { useAppSelector } from "@/store/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Redirect, Tabs } from "expo-router";

const TabLayout = () => {
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "var(--color-cobalt)",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Card",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bag" : "bag-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "WishList",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
