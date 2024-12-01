import { useState, useEffect } from 'react';
import Games from '../components/StorageComponents/Games';
import style from '../styles/Storage.module.css';
import Genres from '../components/StorageComponents/Genres';

const apibaseURL = import.meta.env.VITE_API_URL;
const apikey = import.meta.env.VITE_API_KEY;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Genre() {

  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSegment, setLastSegment] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const segments = url.split('/');
    const lastSegment = segments.pop() || segments.pop();  // Handle potential trailing slash
    setLastSegment(lastSegment);
    console.log(lastSegment);
  }, []);

  useEffect(() => {
    async function fetchPaginatedGames() {
      console.log('---->', import.meta.env.VITE_API_URL)
      setLoading(true);
      setError(null);
      // setGames([]);
      try {
        const response = await fetch(
          // `https://api.rawg.io/api/games?key=07a85d8988334bd5ae558130693c6d96`
          apibaseURL + 'games?key=' + apikey

        );

        if (response.ok) {
          const json = await response.json();
          console.log('responding API... con page:', page);
          setGames((prev) => [...prev].concat(json.results.filter(g => g.genres[0].id == lastSegment)));
          console.log(json.results);
        } else {
          const json = await response.json();
          console.log(json);
        }
      } catch (e) {
        setError(`Error in requesting games. - ${e.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPaginatedGames();
  }, [page]);
  
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-12 text-center">
          {/* <h1>Pagina che mostrerá il genere del gioco</h1> */}
          <Games
            loading={loading}
            error={error}
            games={games}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Genre;
