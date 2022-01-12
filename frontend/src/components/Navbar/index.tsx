import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import ImgLogo from 'assets/img/opniao.png';
import './styles.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="whichmovie-nav-content">
                    <Link to="/">
                        <h1><img src={ImgLogo} alt="opniao" width="40" /> WhichMovie</h1>
                    </Link>
                    <a href="https://github.com/thiagodorea" target="_blank" rel="noreferrer">
                        <div className="whichmovie-contact-container">
                            <GithubIcon />
                            <p className="whichmovie-contact-link">/thiagodorea</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;