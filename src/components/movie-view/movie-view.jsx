import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export const MovieView = ({ movies, user, token, updateUser }) => {
  const { MovieID } = useParams();
  const movie = movies.find((m) => m.id === MovieID);

  const [isFavoriteMovie, setAsFavorite] = useState(
    user.FavoriteMovies.includes(movie.id)
  );
  useEffect(() => {
    setAsFavorite(user.FavoriteMovies.includes(movie.id));
    window.scrollTo(0, 0);
  }, [MovieID]);

  const addFavorite = () => {
    fetch(
      `https://movie-api-movieflix.onrender.com/users/${user.Username}/movies/${MovieID}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("Successfully added to favorites");
          setAsFavorite(true);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFavorite = () => {
    fetch(
      `https://movie-api-movieflix.onrender.com/users/${user.Username}/movies/${MovieID}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert(`"${movie.Title}" Successfully deleted from favorites`);
          setAsFavorite(true);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <Col>
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

        <Link to={"/"}>
          <Button variant="primary"> Back </Button>
        </Link>
        {isFavoriteMovie ? (
          <Button
            variant="danger"
            className="ms-2 mt-4 mb-4"
            onClick={removeFavorite}
          >
            Remove From Favorite
          </Button>
        ) : (
          <Button
            variant="success"
            className="ms-2 mt-4 mb-4"
            onClick={addFavorite}
          >
            Add to favorite
          </Button>
        )}
      </Col>
    </>
  );
};
