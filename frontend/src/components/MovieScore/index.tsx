import MovieStars from 'components/MovieStars/index';
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {

    return (
        <div className="whichmovie-score-container">
            <p className="whichmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score = {score} />
            <p className="whichmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;