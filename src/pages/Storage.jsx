import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import Games from '../components/StorageComponents/Games';
import style from '../styles/Storage.module.css';
import Genres from '../components/StorageComponents/Genres';
// import supabase from '../supabase/client';


const apibaseURL = import.meta.env.VITE_API_URL;
const apikey = import.meta.env.VITE_API_KEY;

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const fetchUsers = async () => {
//   const { data, error } = await supabase
//     .from('users')
//     .select('*');

//   if (error) {
//     throw new Error(error.message);
//   }
//   return data;
// };



// Chiamata per precaricache i generi nella pagina Storage...questa chiamata va passata al react router dom.
export async function getGenres() {
  const response = await fetch(
    // `https://api.rawg.io/api/genres?key=07a85d8988334bd5ae558130693c6d96`
    apibaseURL + 'genres?key=' + apikey
  );
  const json = await response.json();
  return json.results;
}



function Storage() {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [users, setUsers] = useState(null);
 

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const data = await fetchUsers();
  //        setUsers(data);
  //        console.log(data);
         
  //     } catch (error) {
  //       // setError(error.message);
        
  //     }
  //   };

  //   getUsers();
  // }, []);


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
          setGames((prev) => [...prev].concat(json.results));
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
    <div className={`container-fluid ${style.bgStorage}`}>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-12 col-md-3">
            <Genres />
            <div style={{ marginTop: '1000px' }} />
          </div>
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

export default Storage;
