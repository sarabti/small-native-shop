import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../ui/button";

interface ProfileModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const ProfileModal = ({ isVisible, setIsVisible }: ProfileModalProps) => {
  const [firstName, setFirstName] = useState("Esmet");
  const [lastName, setLastName] = useState("Chie?");
  const [isLoading, setIsLoading] = useState(false);

  const profilePic = require("../../assets/images/bunny.png");

  const handleUpdateProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(false);
    }, 2000);
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => setIsVisible(false)}
    >
      <View className="flex-1 p-6">
        <View className="flex-row items-center justify-between mb-40">
          <Text className="text-2xl font-bold text-cod-gray">Profile</Text>
          <Pressable onPress={() => setIsVisible(false)}>
            <Ionicons name="close" size={28} className="text-cobalt" />
          </Pressable>
        </View>

        <View className="items-center mb-10">
          <Image source={profilePic} className="w-60 h-60 rounded-full" />
        </View>

        <View className="gap-4">
          <View>
            <Text className="text-xs uppercase font-medium tracking-widest text-scorpion mb-2">
              First Name
            </Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              className="border border-secondary rounded-2xl px-4 py-3.5 text-base text-cod-gray"
              placeholder="First name"
            />
          </View>

          <View>
            <Text className="text-xs uppercase font-medium tracking-widest text-scorpion mb-2">
              Last Name
            </Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              className="border border-secondary rounded-2xl px-4 py-3.5 text-base text-cod-gray"
              placeholder="Last name"
            />
          </View>

          <Button
            className="mt-4"
            variant="default"
            disabled={isLoading}
            onPress={handleUpdateProfile}
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text className="text-primary-foreground">Save Profile</Text>
            )}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
