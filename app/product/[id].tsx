import RatingStars from "@/components/RatingStars";
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
  const [isWishListed, setIsWishListed] = React.useState(false);

  const { data: product, isLoading } = useGetProductDetailsQuery(id, {
    skip: !id,
  });

  const toggleWishList = () => {
    setIsWishListed((prev) => !prev);
  };

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
          <Pressable
            className="bg-secondary p-4 rounded-2xl"
            onPress={toggleWishList}
          >
            <Ionicons
              name={isWishListed ? "heart" : "heart-outline"}
              size={26}
            />
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
            <View className="flex-row items-center gap-2">
              <RatingStars rating={product?.rating ?? 0} />
              <Text className="text-sm uppercase tracking-widest font-semibold text-scorpion">
                {product?.reviews ?? 0} Reviews
              </Text>
            </View>
          </View>
          <View className="gap-3 p-6 bg-secondary mt-8 rounded-xl">
            <Text className="text-[11px] uppercase tracking-widest font-bold text-gun-powder">
              The Narrative
            </Text>
            <Text className="text-scorpion text-xl leading-relaxed tracking-wide">
              {product?.description}
            </Text>
          </View>
          <Pressable className="w-full bg-cobalt rounded-lg py-6 items-center justify-center gap-4 flex-row mt-10">
            <Ionicons name="bag" size={20} color="white" />
            <Text className="text-white tracking-[0.2rem] uppercase font-bold text-base">
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
