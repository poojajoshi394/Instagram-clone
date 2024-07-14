import React, { useState } from 'react';
import { View, Image, Text, TextInput ,Pressable} from 'react-native';

export default function CreatePost() {
  const [caption, setCaption] = useState('');

  return (
    <View className="p-3 items-center flex-1">
      {/* Image Picker */}
      <Image
        source={{ uri: 'https://ashisheditz.com/wp-content/uploads/2023/11/instagram-profile-attitude-girl-dp.jpg' }}
        className="w-52 aspect-[3/4] rounded-lg shadow-md"
      />
      {/* Button */}
      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>
      {/* Text input */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="What is on your mind"
        className="w-full p-3"
      />
      {/*button*/}
      <View className="mt-auto w-full">
      <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md'>
        <Text className="text-white font-semibold">Share</Text>
      </Pressable>
      </View>
    </View>
  );
}
