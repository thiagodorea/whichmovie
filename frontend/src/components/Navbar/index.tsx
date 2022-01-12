import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import ImgLogo from 'assets/img/opniao.png';
import './styles.css'

function Navbar(){
    return (
        <header>
            <nav className="container">
                <div className="whichmovie-nav-content">
                    <h1><img src={ImgLogo} alt="opniao" width="40" /> WhichMovie</h1>
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