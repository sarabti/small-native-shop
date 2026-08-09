import Ionicons from "@expo/vector-icons/Ionicons";
import { clsx } from "clsx";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface HeaderProps {
  categories: string[];
  categoryFilter: string;
  handleFilterCategory: (cat: string) => void;
}

const Header = ({
  categories,
  categoryFilter,
  handleFilterCategory,
}: HeaderProps) => {
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 mt-8">
            {categories.map((category) => (
              <Pressable
                key={category}
                className={clsx(
                  `whitespace-nowrap px-6 py-3.5 rounded-2xl text-xs uppercase tracking-widest font-semibold`,
                  categoryFilter === category ? "bg-cobalt" : "bg-secondary",
                )}
                onPress={() => handleFilterCategory(category)}
              >
                <Text
                  className={clsx(
                    `uppercase font-bold text-gun-powder`,
                    categoryFilter === category && "text-white",
                  )}
                >
                  {category}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;
