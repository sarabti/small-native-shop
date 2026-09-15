import SafeAreaView from "@/components/SafeAreaView";
import { productImages } from "@/lib/images";
import { useGetProductDetailsQuery } from "@/store/api/productApi";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: product, isLoading } = useGetProductDetailsQuery(id, {
    skip: !id,
  });

  if (isLoading)
    return (
      <ActivityIndicator
        color="#0041c8"
        size="large"
        className="flex-1 items-center justify-center"
      />
    );

  return (
    <SafeAreaView className="flex-1 bg-vistas-white">
      <ScrollView contentContainerClassName="p-[10px]">
        <View className="flex-row items-center justify-between">
          <Pressable
            className="p-4 ml-2 rounded-2xl bg-secondary"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text className="font-bold tracking-tighter text-4xl text-cod-gray">
            Curator
          </Text>
          <Pressable className="bg-secondary p-4 rounded-2xl">
            <Ionicons name="heart-outline" size={26} />
          </Pressable>
        </View>
        <View className="px-6 mt-6">
          <Image
            source={
              product?.thumbnail
                ? (productImages as any)[product!.thumbnail]
                : null
            }
            className="w-full h-120 rounded-2xl"
          />
          <Text className="font-extrabold text-5xl tracking-tighter text-cod-gray mt-6">
            {product?.name}
          </Text>
          <View className="justify-between flex-row mt-2 items-center">
            <Text className="text-scorpion font-light text-3xl">
              ${product?.price}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
