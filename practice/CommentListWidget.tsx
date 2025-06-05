import React, { useMemo } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import CommentVisualCard from './CommentVisualCard'


type commentType = {
  id: number;
  creator: string;
  content: string;
  profilePicUrl: string;
  likes?: string[];
}

type CommentListWidgetProps = {
  comments: commentType[];
}

export const CommentListWidget = ({ comments }: CommentListWidgetProps) => {

  const commentsWithIds = useMemo(() => {
    return comments.map((comment) => ({
      ...comment,
      id: Number,
    }));
  }, [comments]);

  return (
    <FlatList
      data={commentsWithIds}
      renderItem={({ item }) => (
        <View style={styles.commentCard}>
          <CommentVisualCard
            creator={item.creator}
            content={item.content}
            profilePicUrl={item.profilePicUrl}
            likes={item.likes}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  commentCard: {
    marginBottom: 10,
  },
})

