import {useState} from "react";
import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";

export const MainView = () => {
    const [movies,setMovies] = useState([
        {
            id: 1,
            title :"Interstellar",
            image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            genre:"Science Fiction",
            director: "Christopher Nolan", 
            year: 2014
        },
        {
            id: 2,
            title: "John Wick",
            image:"https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
            description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.",
            genre: "Action",
            director: "Chad Stahelski",
            year: 2014

        },
        
        {
            id: 3,
            title: "The Conjuring",
            image:"https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            genre: "Horror",
            director:"James Wan",
            year : 2013
   
        }
        ,
        {
            id: 4,
            title: "The Mummy",
            image:"https://upload.wikimedia.org/wikipedia/en/6/68/The_mummy.jpg",
            description: "At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.",
            genre: "Fantasy",
            director: "Stephen Sommers",
            year: 1999
        
        },
        {
            id: 5,
            title: 'Titanic',
            image:"https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            genre: "Romance",
            director: "James Cameron",
            year: 1997
        }

    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    if(selectedMovie){
        return (
        <MovieView movie = {selectedMovie} onBackClick ={ () => setSelectedMovie(null)} />
        );
    }

    if (movies.length=== 0){
        return <div>The list is Empty!</div>
    }
    return(
        <div>
            {movies.map((movie)=>(
            <MovieCard
            key ={movie.id}
            movie ={movie}
            onMovieClick = {(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
            }}
            />
            ))}
        </div>
    );
};