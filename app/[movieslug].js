import { Link } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import { Puntuacion } from "../components/Puntuacion";

export default function Detail() {
  const { movieslug } = useLocalSearchParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    if (movieslug) {
      getMovieDetails(movieslug).then(setMovieInfo);
    }
  }, [movieslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "header title",
          headerRight: () => {},
        }}
      />
      <View>
        {movieInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: movieInfo.posterUrl }}
                style={{ width: 214, height: 294 }}
              />
              <Puntuacion puntuacionActual={movieInfo.rating} puntuacionMaxima={100} />
              <Text className="text-white text-center font-bold text-xl">
                {movieInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {movieInfo.overview}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
