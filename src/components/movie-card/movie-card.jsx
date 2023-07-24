import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Link
      className="text-decoration-none"
      to={`/movies/${encodeURIComponent(movie.id)}`}
    >
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body className="text-center">
          <Card.Title> {movie.Title} </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
    }).isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
  }).isRequired,
};
