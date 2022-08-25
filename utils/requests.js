const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        //https://api.themoviedb.org/3/trending/movie/week?api_key=ef7fb1fbb2fd5cc8f38e6e3e792684a5&language=en-US
        url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActioniMovies: {
        title: 'Action',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27,`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: 'Western',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: 'TV Movie',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    }
}