import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ChatNotification = ({ isUnread }) => {
    return (
        <TouchableOpacity>
            <View
                className={`mt-2 px-5  flex-row  items-center relative h-[98px] ${
                    isUnread ? "bg-light-purple" : "bg-[#D9C5E3]"
                }`}
            >
                <Text className="pr-3 pt-2 text-md absolute right-0 top-0">
                    20-2-2022
                </Text>

                <View className="flex-row  items-center">
                    <View className="relative">
                        <Image
                            source={require("../../assets/ProfileCard/profile-pic.png")}
                            className="h-14 w-14"
                        />
                        {isUnread && (
                            <View className="bg-[#570E7E] h-[25px] w-[25px] rounded-full absolute -right-4 -top-4 flex items-center justify-center">
                                <Text className="font-bold text-white">1</Text>
                            </View>
                        )}
                    </View>
                    <View className="ml-5">
                        <Text className="text-lg text-white font-extrabold">
                            Manuel Fernandez
                        </Text>
                        <Text className="text-base">
                            Hola que tal, como estas?
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ChatNotification;
