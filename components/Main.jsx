import { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator, Platform, StyleSheet } from "react-native";
import { getLatestMovies } from "../api/tmdb";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovieCard } from "./MovieCard";
import { Logo } from "./Logo";

export function Main() {
  const [Movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestMovies().then((Movies) => {
      setMovies(Movies);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      
      {Movies.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <View style={Platform.OS === 'web' ? styles.estiloWeb : styles.estiloMovil}>
          {Platform.OS === 'web' ? (
            <View style={{ paddingVertical: 20 }}>
              {Movies.map((Movie, index) => (
                <MovieCard key={Movie.slug} Movie={Movie} index={index} />
              ))}
            </View>
          ) : (
            <FlatList
              data={Movies}
              keyExtractor={(Movie) => Movie.slug}
              renderItem={({ item, index }) => (
                <MovieCard Movie={item} index={index} />
              )}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  estiloWeb: {
    height: '100vh',
    //activamos el scrolling vertical usando el overflowY (SOLO activo cuando "Platform.OS === 'web'")
    overflowY: 'auto', 
  },
  estiloMovil: {
    flex: 1,
  },
});
