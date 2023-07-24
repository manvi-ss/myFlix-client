import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { MovieID } = useParams();
  const movie = movies.find((m) => m.id === MovieID);

  return (
    <div>
      <div>
        <img src={movie.ImagePath} />
      </div>

      <div>
        <h4>
          <span> Title: </span>
          <span>{movie.Title}</span>
        </h4>
      </div>

      <div>
        <span>
          {" "}
          <b> Description: </b>
        </span>
        <span>{movie.Description}</span>
      </div>

      <br />

      <div>
        <span>
          {" "}
          <b> Genre: </b>
        </span>
        <span>{movie.Genre.Name}</span>
      </div>

      <div>
        <span>
          {" "}
          <b> Genre-Description: </b>
        </span>
        <span>{movie.Genre.Description}</span>
      </div>

      <br />

      <div>
        <span>
          {" "}
          <b> Director: </b>
        </span>
        <span>{movie.Director.Name}</span>
      </div>

      <div>
        <span>
          {" "}
          <b> Bio: </b>
        </span>
        <span> {movie.Director.Bio} </span>
      </div>

      <div>
        <span>
          {" "}
          <b> Birthyear: </b>
        </span>
        <span> {movie.Director.Birth} </span>
      </div>

      <br />
      <Link to={"/"}>
        <button className="back-button"> Back </button>
      </Link>
    </div>
  );
};
