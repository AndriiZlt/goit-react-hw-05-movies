import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import APIKEY from './APIKEY';
import css from './styles.module.css';
import ActorImage from '../images/actor.png';

const Cast = () => {
  const [id] = useOutletContext();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`)
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(`Error on fetch request with ID ${id}`, error);
      });
  }, [id]);

  return (
    <div className={css.cast}>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.cast_id} className={css.actorLi}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : ActorImage
              }
              alt="Movie poster"
            />
            <p className={css.actorDetails}>
              {actor.name} (Character: {actor.character})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
