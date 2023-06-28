import css from '../components/styles.module.css';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect, Suspense } from 'react';
import ImagePlaceholder from '../images//placeholder.png';
import APIKEY from '../components/APIKEY';

const Movie = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const [posterPath, setPosterPath] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);
  const [id, setId] = useState('');
  const movie = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.movieId}?language=en-US&api_key=${APIKEY}`
    )
      .then(response => response.json())
      .then(data => {
        console.log('movie data', data);
        if (data.title) {
          setIsAvailable(true);
          setPosterPath(data.poster_path);
          setTitle(data.title);
          const date = new Date(data.release_date);
          setYear(date.getFullYear());
          setScore(Math.floor(data.vote_average * 10));
          setOverview(data.overview);
          setGenres(data.genres);
          setId(data.id);
        } else {
          setIsAvailable(false);
        }
      })
      .catch(error => {
        console.log(`Error on fetch request with ID ${movie.movieId}`, error);
      });
  }, [movie.movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkLocation.current}>
        <button type="button">🡸 Go back</button>
      </Link>
      {isAvailable ? (
        <div className={css.movie}>
          <div className={css.poster}>
            <img
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : ImagePlaceholder
              }
              alt="Movie poster"
            />
          </div>

          <div className={css.movieDetails}>
            <h2>
              {title} ({year})
            </h2>
            <p>User Score: {score}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={css.genres}>
              {genres.map(genre => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <br />
        </div>
      ) : (
        <div className={css.movie}>
          <h1>Sorry, we have no information about this movie...</h1>
        </div>
      )}
      {isAvailable && (
        <>
          <h3>Additional information:</h3>
          <ul className={css.infoList}>
            <li className={css.info}>
              <Link to="cast">Cast</Link>
            </li>
            <li className={css.info}>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet context={[id, setId]} />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Movie;
