import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";

export function MovieCard({ Movie }) {
  return (
    <View key={Movie.slug} style={styles.card}>
      <Image style={styles.image} source={{ uri: Movie.posterUrl }}/>
      <Text  style={styles.title}>{Movie.title}</Text>
      <Text  style={styles.rating}>{Movie.rating}</Text>
      <Text  style={styles.overview}>{Movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  overview: {
    fontSize: 16,
    color: "#eee",
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
