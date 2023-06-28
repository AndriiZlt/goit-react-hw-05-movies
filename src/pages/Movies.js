import css from '../components/styles.module.css';
import APIKEY from '../components/APIKEY';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (searchQuery !== '') {
      fetchHandler(searchQuery);
    } else {
      setMessage('');
    }
  }, [searchQuery]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.movieName.value;
    setSearchParams({ search: `${query}` });
    fetchHandler(query);
  };

  const fetchHandler = query => {
    fetch(
      `http://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`
    )
      .then(r => r.json())
      .then(data => {
        console.log(data);
        if (data.results.length === 0) {
          setMessage('No results. Try something else.');
        }
        setResults([...data.results]);
      });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleFormSubmit}>
        <label>
          Type movie title here
          <input
            defaultValue={searchQuery}
            id="movieName"
            type="text"
            name="movieName"
            style={{ marginLeft: 20 }}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <div>
        <ul>
          {results.length > 0 ? (
            results.map(result => (
              <li key={result.id}>
                <Link to={`${result.id}`} state={{ from: location }}>
                  {result.title}
                </Link>
              </li>
            ))
          ) : (
            <p>{message}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
