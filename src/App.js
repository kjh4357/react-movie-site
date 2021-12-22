import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
      setLoading(false);
  }
  useEffect(() => {
    getMovies(); 
  }, [])
  console.log(movies)
  return (
    <div>
      <h1>The Coins!</h1>
      {loading 
      ? <p><strong>Loading...</strong></p> 
      : <div>{movies.map(item => item.title)}</div>
      }
      
    </div>
  );
}

export default App;
