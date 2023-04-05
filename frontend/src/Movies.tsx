import { useState, useEffect } from "react";
import { Movie } from "./types/movies";
import data from "./MovieData.json";

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/Movie");
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []);

  //Above is what is used to pull the API
  //Below, we use mapping to allow the flexibility of it to come in.
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <table className="table table-striped table-hover table-sm table-responsive">
            <thead className="table border">
              <tr>
                <th>MovieId</th>
                <th>Category</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>LentTo</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody className="table border">
              {listOMovies.map((m) => (
                <tr key={m.movieId}>
                  <td>{m.movieId}</td>
                  <td>{m.category}</td>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
