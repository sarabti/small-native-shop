import Header from "@/components/Header";
import SafeAreaView from "@/components/SafeAreaView";
import { useGetProductsQuery } from "@/store/api/productApi";
import { FlatList, Text, View } from "react-native";

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
              <View className="bg-vistas-white rounded-lg shadow-md p-4">
                <View className="h-40 bg-gray-200 rounded-lg mb-4" />
                <View>
                  <Text className="text-lg font-semibold text-cod-gray">
                    {item.name}
                  </Text>
                  <Text className="text-sm text-scorpion">{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
