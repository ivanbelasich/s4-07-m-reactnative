import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProfileImage = ({ImageUrl}) => {
    const userData = useSelector(state => state.user)
    const user = userData[0]?.user
    const [image, setImage] = React.useState('');
    const openImagePickerAsync = async () => {
       const {status}= await ImagePicker.requestMediaLibraryPermissionsAsync();
         if(status !== 'granted'){
              alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }
        if (status === 'granted') {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
            });
            if (!result.cancelled) {
                setImage(result.uri);
            }
        }
    };

    const uploadProfileImage = async () => {
      const formData = new FormData();
        formData.append('photo', {
            name: new Date() + '_profile',
            uri: image,
            type: 'image/jpg',
        })
        try {
            const res = await axios.post(`https://s4-07-m-reactnative.herokuapp.com/api/users/${user.id}`,formData,{
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
        

    console.log(image)



  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={openImagePickerAsync}>
       {/* <Image source={{uri:user.photoUrl}} className="z-0 w-20 h-20 rounded-full" /> */}
       <Image source={{uri:image}} className="z-0 w-20 h-20 rounded-full" />
    </TouchableOpacity>
    <TouchableOpacity onPress={uploadProfileImage}>
        <Text>Upload</Text>
    </TouchableOpacity>
    </View>
  )
}

export default ProfileImage