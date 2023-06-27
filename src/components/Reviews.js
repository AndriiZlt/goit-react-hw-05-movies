import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import APIKEY from './API_KEY';
import css from './styles.module.css';

const Reviews = () => {
  const [id] = useOutletContext();
  const [reviews, setReviews] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setIsAvailable(true);
          setReviews(data.results);
        } else {
          setIsAvailable(false);
        }
      })
      .catch(error => {
        console.log(`Error on fetch request with ID ${id}`, error);
      });
  }, [id]);

  return (
    <div className={css.cast}>
      <ul className={css.castList}>
        {isAvailable
          ? reviews.map(review => (
              <li key={review.id} className={css.reviewLi}>
                <h4>{review.author}</h4>
                <p className={css.reviewContent}>{review.content}</p>
              </li>
            ))
          : "We don't have any reviews for this movie"}
      </ul>
    </div>
  );
};

export default Reviews;
