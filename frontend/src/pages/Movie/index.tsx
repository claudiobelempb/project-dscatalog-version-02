import { LoaderDefault } from 'app/common/LoaderDefault';
import { MovieFindAll } from 'hooks/Filmes/FilmeFindAll';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

type MoviesType = {
  titulo: string;
  avatar: string;
};

const Filme: React.FC = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleLoadingMovie();
  }, []);

  const handleLoadingMovie = async () => {
    try {
      setLoading(true);

      const filmes = await MovieFindAll();
      setMovies(filmes.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMovies([]);
      console.log(error);
      toast.error('Error Servidor');
    }
  };

  return (
    <div className="container">
      <h1 className="display-4">Filmes</h1>
      {/* <button
        onClick={handleLoadingMovie}
        className="btn btn-primary text-white"
        >
        Carregar Filmes
      </button> */}
      <div>
        <h2 className="lead">
          Total de Filmes:
          {movies.length ? (
            <strong>{movies.length}</strong>
          ) : (
            <LoaderDefault show={loading} size={1} />
          )}
        </h2>
      </div>
      <LoaderDefault show={loading} size={6} />
      <div className="row row-cols-xl-6 row-cols-lg-3 row-cols-md-2 row-col-sm-1 g-3">
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <img className="img-fluid" src={movie.avatar} alt="" />
              <h3>{movie.titulo}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filme;
