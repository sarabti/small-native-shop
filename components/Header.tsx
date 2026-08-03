import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const handleProfile = () => {
    // Handle profile icon press
  };
  return (
    <View className="mb-12">
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-medium tracking-tighter text-cod-gray uppercase">
          Curator
        </Text>
        <Ionicons
          name="person-circle"
          size={32}
          className="text-cobalt"
          onPress={handleProfile}
        />
      </View>
      <View className="mt-10">
        <Text className="text-xs uppercase font-medium tracking-widest text-scorpion mb-2">
          Seasonal Essence
        </Text>
        <Text className="text-5xl font-bold tracking-tight text-cod-gray">
          The Modern Collective
        </Text>
        {/* Categories */}
      </View>
    </View>
  );
};

export default Header;
