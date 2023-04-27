import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

// 17d6ce9a

const API_URL = 'http://www.omdbapi.com?apikey=17d6ce9a';

const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ search, setSearch ] = useState('');

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    }

useEffect(() => {
     searchMovies('batman');  
}, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for a movie..." />
                <img src={SearchIcon} alt='Search Icon' onClick={() => searchMovies(search)} />
            </div>
            {
                movies?.length > 0 
                ? ( 
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies to show</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;