import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";

export const MainView = () => {
    const [movies,setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(()=>{
        fetch("https://movie-api-movieflix.onrender.com/movies")
        .then((response) => response.json())
        .then((data) => {
            const moviesFromApi = data.map((doc) => {
                return{
                    _id: doc._id,
                    Title: doc.Title,
                    Description: doc.Description,
                    Genre: {
                        Name: doc.Genre.Name,
                        Description: doc.Genre.Description
                    },
                    Director:{
                        Name: doc.Director.Name,
                        Bio: doc.Director.Bio,
                        Birth: doc.Director.Birth
                    },
                    ImagePath: doc.ImagePath,
                    Featured: doc.Featured
                };
            });
            setMovies(moviesFromApi);
        })
        .catch((error) =>{
            console.error("Error fetching movies:", error);
        });
    }, []);

    if (selectedMovie){
        return (
            <MovieView  movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>
        );
    }

    if (movies.length === 0) {
        return <div> The list is empty! </div>;
    }
    return(
        <div>
            {movies.map((movie)=>(
            <MovieCard
            key ={movie._id}
            movie ={movie}
            onMovieClick = {(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
            }}
            />
            ))}
        </div>
    );
};