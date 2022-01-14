import { Link } from "react-router-dom";
import MovieScore from "components/MovieScore";
import { Movie } from "types/movies";

type Props = {
    movie: Movie;
}

function MovieCard({ movie } : Props) {

    return (
        <div>
            <img className="whichmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="whichmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to="/form/1">
                    <div className="btn btn-primary whichmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;