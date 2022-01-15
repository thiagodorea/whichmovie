
import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL } from "utils/requests";
import Loading from 'components/Loading';

function Listing() {

    const [done, setDone] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    const [msg, setMsg] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                setDone(true);
            })
            .catch(error => { setDone(true);  setMsg("Error ao carregar os dados do servidor, favor atualize a pagina." + error);});
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            {!done ? (<Loading />) : (
                <>
                    {page.content.length > 0 ? <Pagination page={page} onChange={handlePageChange} /> : null}
                    <div className="container">
                        <div className="row">
                            {page.content.map(movie => (
                                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {page.content.length > 0 ? <Pagination page={page} onChange={handlePageChange} /> : msg}
                </>
            )}
        </>
    );
}
export default Listing;