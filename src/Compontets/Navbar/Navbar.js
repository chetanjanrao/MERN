import "./NavbarStyles.css";
import youtubeDesktop from "../../utils/Navbar/YoutubeDesktop.png"
export default function Navbar() {
        return (
                <>
                        <header className="navbar-header">
                                <nav className="navbar">
                                        <div className="navbar-left">
                                                <div className="hamburger-div">&#9776;</div>
                                                <div className="log-div">
                                                        <img className="logoSyle" src={youtubeDesktop} alt="logo" />
                                                </div>
                                        </div>
                                        {/* ----------------Search bar--------------------------------------------     */}
                                        <div className="navbar-middle">
                                                <input type="text" placeholder="Search..." />
                                                <i className="search-result">
                                                        X
                                                </i>
                                        </div>
                                        {/*  --------------------------------Right menu-------------------------------------- */}
                                        <div className="navbar-right">
                                                <div className="right-child">
                                                        <div className="video-upload">
                                                                &#9776;
                                                        </div>
                                                        <div className="bell">
                                                                &#9776;
                                                        </div>
                                                        <div className="profile">
                                                                <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" alt="profile" />
                                                        </div>
                                                </div>
                                        </div>
                                </nav>
                        </header>

                </>
        )
}