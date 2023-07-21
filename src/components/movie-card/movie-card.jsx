import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

export const MovieCard = ({movie, onMovieClick}) => {
    return (
    <Card onClick={() => onMovieClick(movie)} variant="link"  className = " movieCard" style={{ width: "18rem" , height:"100%" }}>
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title> {movie.Title} </Card.Title>
      </Card.Body>
    </Card>
    );
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }).isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        }).isRequired,
        ImagePath:PropTypes.string.isRequired,
        Featured: PropTypes.bool.isRequired
    }).isRequired
};