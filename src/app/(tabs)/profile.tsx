import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../components/Button';

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 flex-1">
      {/* Image Picker */}
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-square self-center rounded-full shadow-md"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full bg-slate-300" />
      )}
      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5 self-center">
        Change
      </Text>
      {/* Form */}
      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 p-3 rounded-md"
      />
      {/* Buttons */}
      <View className='gap-2 mt-auto'>
      <Button title="Update proile" />
      <Button title="Sign out" />
      </View>
    </View>
  );
}
