import css from '../components/styles.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import APIKEY from '../components/APIKEY';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovies([...data.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={css.container}>
      <h1>Tranding today:</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title ?? movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
