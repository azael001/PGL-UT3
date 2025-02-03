import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Puntuacion } from "./Puntuacion";

export function MovieCard({ Movie }) {
  return (
    <View className="bg-slate-500/10 p-4 rounded-xl gap-4 mb-10" key={Movie.slug}>
      <Image style={styles.image} source={{ uri: Movie.posterUrl }}/>
      <Text className="mb-1" style={styles.title}>{Movie.title}</Text>
      <Puntuacion puntuacionActual={Movie.rating} puntuacionMaxima={100}/>
      <Text className="mt-2 flex-shrink" style={styles.overview}>{Movie.overview.slice(0, 100)}</Text>
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
