import Header from "@/components/Header";
import SafeAreaView from "@/components/SafeAreaView";
import { productImages } from "@/lib/images";
import { useGetProductsQuery } from "@/store/api/productApi";
import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Home = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <SafeAreaView className="flex-1 bg-vistas-white">
      <View className="px-6 mt-4 pb-4">
        <FlatList
          ListHeaderComponent={Header}
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View className="w-[48%] mb-10 gap-4">
              <Pressable onPress={() => router.push(`/product/${item.id}`)}>
                <Image
                  source={(productImages as any)[item.thumbnail]}
                  className="w-full h-62 rounded-2xl"
                />
              </Pressable>
              <View className="gap-1.5">
                <Text className="text-base font-medium tracking-widest text-scorpion uppercase">
                  {item.category}
                </Text>
                <Text className="text-lg font-medium leading-tight text-cod-gray">
                  {item.name}
                </Text>
                <Text className="text-base font-bold text-cobalt uppercase">
                  ${item.price}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
