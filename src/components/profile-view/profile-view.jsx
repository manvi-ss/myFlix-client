import { UserInfo } from "./user-info";
import { UserEdit } from "./user-edit";
import { MovieCard } from "../movie-card/movie-card";
import { Col, Button, Row } from "react-bootstrap";

export const ProfileView = ({
  user,
  token,
  movies,
  updateUser,
  onLoggedOut,
}) => {
  let favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col xl={6} md={12} className="d-flex justify-content-center mh-60">
          <UserInfo user={user} />
        </Col>
        <Col xl={6} md={12} className="d-flex justify-content-center mh-60">
          <UserEdit
            user={user}
            token={token}
            updateUser={updateUser}
            onLoggedOut={onLoggedOut}
          />
        </Col>
        <Col>
          <h3 className="mt-3 mb-3 text-dark"> Your favorite movies :</h3>
        </Col>
      </Row>
      <Row className="d-flex ">
        {favoriteMovies.map((movie) => (
          <Col key={movie.id} className="mb-4 mt-4" xl={6} md={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};
