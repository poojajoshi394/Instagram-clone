import React from 'react';
import { FlatList, View } from 'react-native';
import PostListItem from '../../components/PostListItems';
import posts from '../../../assets/data/posts.json'
export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
