import PropTypes from "prop-types";

export const MovieCard = ({movie, onMovieClick}) => {
    return (
    <div
    onClick = {() => {
        onMovieClick(movie);
    }}
    >
    <h3>{movie.Title} </h3>
    </div>
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