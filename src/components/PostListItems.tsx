import React from 'react';
import { View, Image, Text } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
export default function PostListItem(props) {
  const post=props.post;
    return(
        <View className="bg-white">
        {/* Header */}
        <View className="p-3 flex-row items-center gap-2 mb-3">
          <Image
            source={{ uri: post.user.image_url }}
            className="w-12 aspect-square rounded-full"
          />
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        {/* Post Image */}
        <Image
          source={{ uri: post.image_url }}
          className="w-full aspect-[4/3] mb-3"
        />
        {/* Post Actions */}
        <View className="flex-row gap-3 p-3">
          <AntDesign name="hearto" size={20} />
          <Ionicons name="chatbubble-outline" size={20} />
          <Feather name="send" size={20} />
          <Feather name="bookmark" size={20} className="ml-auto" />
        </View>
      </View>

    );
}
