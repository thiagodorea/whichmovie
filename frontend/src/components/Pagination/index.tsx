import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="whichmovie-pagination-container">
            <div className="whichmovie-pagination-box">
                <button className="whichmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="whichmovie-pagination-button" disabled={false} >
                    <Arrow className="whichmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;