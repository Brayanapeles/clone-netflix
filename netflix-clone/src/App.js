import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  //Quando a tela for recarrega essa função tem prioridade
  useEffect(()=>{
    const loadAll = async () => {
      //Pegando toda a lista
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals'); 
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll()
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.addEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com Amor <span role="img" arial-label="coração">❤</span><br />
        Direitos de imagem para Netflix<br />
        Dados pego do site Themoviedb.org
      </footer>
    </div>
  );
}