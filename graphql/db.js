  let movies = [
    {
      id: "0",
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: "1",
      name: "Avengers - The new one",
      score: 2  
    },
    {
      id: "2",
      name: "The Godfather I",
      score: 99
    },
    {
      id: "3",
      name: "Logan",
      score: 8
    }
  ];

  export const getMovies = () => movies;

  export const getById = id => {
      const filteredMovies = movies.filter(movie => movie.id === String(id));
      return filteredMovies[0];
  };

  export const deleteMovies = id => {
    const cleanedMovies = movie.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length){
      movie = cleanedMovies;
      return true
    } else {
      return false
    }
  }