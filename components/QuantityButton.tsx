import { Product } from "@/types/product";
import { clsx } from "clsx";
import { useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";

interface QuantityButtonProps {
  product: Product;
  className?: string;
}

const QuantityButton = ({ product, className }: QuantityButtonProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = useCallback(() => {
    setQuantity((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  }, []);

  const handleIncrease = useCallback(() => {
    setQuantity((prev) => {
      if (prev < 10) return prev + 1;
      return prev;
    });
  }, []);

  return (
    <View
      className={clsx(
        "flex-row bg-secondary items-center rounded-lg self-start",
        className,
      )}
    >
      <Pressable className="py-3 px-6" onPress={handleDecrease}>
        <Text className="text-[24px]">-</Text>
      </Pressable>
      <Text className="font-semibold text-xl">{quantity}</Text>
      <Pressable className="py-3 px-6" onPress={handleIncrease}>
        <Text className="text-[24px]">+</Text>
      </Pressable>
    </View>
  );
};

export default QuantityButton;
