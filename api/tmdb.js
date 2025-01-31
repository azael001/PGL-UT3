export async function getLatestMovies() {
  const API_KEY = '4ff4aa8b7fbe0121991122d6041cfb66';
  const LATEST_MOVIES = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
  const IMAGEN_PLACEHOLDER = 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk='

  const rawData = await fetch(LATEST_MOVIES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((movie) => {
    const { title, release_date, overview, poster_path, vote_average } = movie;

    const posterUrl = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : IMAGEN_PLACEHOLDER;

    return {
      title,
      releaseDate: release_date,
      overview,
      posterUrl,
      rating: vote_average,
    };
  });
}
