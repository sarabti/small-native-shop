import SafeAreaView from "@/components/SafeAreaView";
import { productImages } from "@/lib/images";
import { useGetProductsQuery } from "@/store/api/productApi";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const WishListHeader = () => {
  return (
    <>
      <View className="flex-row items-center justify-between">
        <Text className="text-4xl font-Medium tracking-tighter text-cod-gray uppercase">
          Curator
        </Text>
        <Ionicons
          name="bag"
          size={24}
          color="black"
          className="text-scorpion"
        />
      </View>
      <View className="mt-10 mb-14">
        <Text className="text-xs font-medium tracking-widest text-scorpion uppercase mb-3">
          Your Selection
        </Text>
        <Text className="text-5xl font-bold tracking-tight text-cod-gray">
          The Wish List
        </Text>
        <Text className="text-xl font-medium leading-relaxed text-scorpion mt-6">
          A curated archive of your future essentials. Review, refine and bring
          your vision to life.
        </Text>
      </View>
    </>
  );
};

const WishList = () => {
  const { data: products } = useGetProductsQuery();

  const wishListProducts = products?.slice(0, 3);

  return (
    <SafeAreaView className="flex-1 bg-vista-white">
      <View className="px-8 mt-4 pb-4">
        <FlatList
          ListHeaderComponent={<WishListHeader />}
          data={wishListProducts}
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="mb-8 px-5">
              <View className="relative">
                <Image
                  source={(productImages as any)[item.thumbnail]}
                  className="w-full h-80 rounded-2xl "
                />
                <Pressable className="absolute top-4 right-4 px-2.5 py-3.5 rounded-2xl bg-[#fcf9f8f6]">
                  <Ionicons name="close" size={30} className="text-cod-gray" />
                </Pressable>
              </View>
              <View className="mt-4 flex-row justify-between">
                <Text className="text-scorpion font-bold uppercase tracking-widest">
                  {item.category}
                </Text>
                <Pressable>
                  <Text className="text-cobalt font-bold tracking-tight text-lg uppercase">
                    Quick Add
                  </Text>
                </Pressable>
              </View>
              <Text className="font-bold text-2xl mt-1">{item.name}</Text>
              <Text className="font-medium text-lg text-gun-powder">
                ${item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default WishList;
