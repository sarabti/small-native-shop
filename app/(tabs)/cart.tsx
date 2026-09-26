import QuantityButton from "@/components/QuantityButton";
import SafeAreaView from "@/components/SafeAreaView";
import { productImages } from "@/lib/images";
import { useGetProductsQuery } from "@/store/api/productApi";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const CartHeader = () => (
  <>
    <View className="flex-row items-center justify-between">
      <Text className="font-semibold tracking-tighter text-3xl uppercase">
        Curator
      </Text>

      <Ionicons name="bag" size={24} className="text-cobalt" />
    </View>

    <View className="mt-10">
      <Text className="text-5xl font-bold tracking-tighter leading-5 mb-3 -ml-1">
        Your Bag
      </Text>

      <Text className="text-scorpion uppercase tracking-widest text-sm font-medium">
        3 Items Curated
      </Text>
    </View>
  </>
);

const Cart = () => {
  const { data: products } = useGetProductsQuery();

  const cartProducts = products?.slice(3, 6);

  return (
    <SafeAreaView className="bg-vistas-white h-full">
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
        ListHeaderComponent={CartHeader}
        renderItem={({ item }) => (
          <View className="mt-12 flex-row gap-8">
            <Image
              source={(productImages as any)[item.thumbnail]}
              className="w-[50%] h-70 rounded-2xl"
            />

            <View className="flex-1 gap-2">
              <Text className="font-bold text-2xl">{item.name}</Text>

              <Text className="font-bold text-lg text-scorpion">
                $ {item.price}
              </Text>

              <QuantityButton product={item} />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View className="bg-white p-10 rounded-2xl mt-10 gap-15">
            <View className="gap-6">
              <Text className="text-3xl font-bold tracking-tight mb-4">
                Order Summary
              </Text>

              <View className="flex-row justify-between items-center">
                <Text className="text-scorpion text-lg">Subtotal</Text>
                <Text className="font-medium text-xl">$3,872</Text>
              </View>

              <View className="flex-row justify-between items-center">
                <Text className="text-scorpion text-lg">
                  Estimated Shipping
                </Text>
                <Text className="font-medium text-xl">Free</Text>
              </View>

              <View className="flex-row justify-between items-center">
                <Text className="text-scorpion text-lg">Taxes</Text>
                <Text className="font-medium text-xl">$127.50</Text>
              </View>

              <View className="h-px bg-[#f0eded] w-full" />

              <View className="flex-row justify-between items-center">
                <Text className="font-black text-2xl">Total</Text>

                <Text className="font-bold text-2xl tracking-tighter">
                  $3,999.50
                </Text>
              </View>
            </View>
            <Pressable className="bg-cobalt px-10 py-6 rounded-2xl self-center">
              <Text className="font-bold text-white text-xl">
                Proceed to Checkout
              </Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Cart;
