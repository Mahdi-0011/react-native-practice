import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type CommentVisuellCardProps = {
  creator: string;
  content: string;
  profilePicUrl: string;
  likes?: string[];
};

const CommentVisuellCard: React.FC<CommentVisuellCardProps> = ({
  creator,
  content,
  profilePicUrl,
  likes = [],
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: profilePicUrl }} style={styles.profile} />
        <Text style={styles.creatorText}>{creator}</Text>
      </View>
      <Text style={styles.contentText}>{content}</Text>
      {likes.length > 0 && (
        <View style={styles.likesContainer}>
          <Text style={styles.likesLabel}>Likes:</Text>
          <Text style={styles.likesText}>{likes.join(" - ")}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5deb3',
    padding: 16,
    margin: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  creatorText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  likesContainer: {
    marginTop: 10,
  },
  likesLabel: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 3,
  },
  likesText: {
    fontSize: 13,
  },
});

export default CommentVisuellCard;
