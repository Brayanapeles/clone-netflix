import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css';

export default () => {
  const [movieList, setMovieList] = useState([]);

  //Quando a tela for recarrega essa função tem prioridade
  useEffect(()=>{
    const loadAll = async () => {
      //Pegando toda a lista
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll()
  }, []);

  return (
    <div className='page'>
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}