import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';




function JobCard() {
    return (
        <View className="h-136 w-342 mb-[8px]" >
            <View className="container items-center justify-center ">
                <TouchableOpacity onPress={""} className=" bg-[#D9C6E3] rounded-[15px]" >
                    <View className=" mt-[12] ml-[18] mb-[9] space-x-96 ">
                        <Text className="  text-2xl w-104 h-25 font-Inter font-medium"> Title 2 </Text>
                        <Text className=" mt-[-26px] text-xl  font-Inter font-black " ><Image source={require('../assets/MoneyIcon.png')} />  1000 </Text>
                    </View>
                    <View className=" ml-[23] mb-[9] space-x-32">
                        <Text className="leading-4  text-sm font-Inter font-normal text-[#565555] pr-[20]" ><Image className="h-[15px] w-[17px]" source={require('../assets/Vector.png')} />  23-09-2022 </Text>
                        <Text className=" mt-[-20px] leading-4 text-sm font-Inter font-normal  text-[#565555]" ><Image className="h-[15px] w-[17px] " source={require('../assets/LocationIcon.png')} />  Mar de Plata </Text>
                    </View>
                    <View className="ml-[23] mb-[16] mr-[140]" >
                        <Text className=" text-sm font-normal leading-4" > Est. Sed tincidunt non consectetur est.placerat sed turpis volutpat at lobortis...</Text>
                    </View>
                    <View className="bg-[#F3F1F1] h-22 w-89 rounded-[10px]  items-center self-end mb-[24px] mr-[19]" >
                        <Text className="text-sm font-normal"> categoria </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default JobCard;
