const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://api.themoviedb.org/3/';
const api_key = '?api_key=49807b4c4260f68efcdc45f0538c5090';
const optional_params = '&language=es&page=1';

//peliculas populares
const popular_movies_get = 'movie/popular';
//export const popularMovieGet = () => `${ cors_anywhere }${ base_url }${ popular_movies_get }${ api_key }${optional_params}`;
export const popularMovieGet = () => `${ base_url }${ popular_movies_get }${ api_key }${optional_params}`;


//detalle pelicula
const movies_get = 'movie/';
export const movieGet = movie_id => `${ base_url }${ movies_get }${ movie_id }${ api_key }${optional_params}`;