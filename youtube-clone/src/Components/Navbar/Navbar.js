import { useState, useRef, useEffect } from "react";
import "./NavbarStyles.css";
//import youtubeDesktop from "../../utils/Navbar/YoutubeDesktop.png";
import Sidebar from "../Sidebar/Sidebar"
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MiniSidebar from "../MiniSidebar.js/MiniSidebar";
import BlurTextureComponent from "../BlurTextureComponent/BlurTextureComponent";
import FeedVideos from "../FeedVideos/FeedVideos";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
//import InputComponent from "../InputComponent";
// import SearchBarForDesktop from "./SearchBarForDesktop";
/*------------------------------  import for App---------------------------------------------------------------------------------- */
export default function Navbar() {
        const [searchQuery, setSearchQuery] = useState(""); // for taking input value
        const [showClearButton, setShowClearButton] = useState(false); // clear button after searchQuery > 0
        const [isClickedOnInput, setIsClickedOnInput] = useState(false);
        const [mobileToDesktopSearchBar, setMobileToDesktopSearchBar] = useState(
                false
        ); //for click to expand the search bar
        const [selectedCategory, setSelectedCategory] = useState('business');
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);   //  for sidebar open check
        const [isBlurCompnentOn, setIsBlurComponentOn] = useState(false);
        const borderColorRef = useRef(null);
        const sidebarref = useRef(null);


        function clearQuery() {
                console.log("before" + searchQuery.length);
                setShowClearButton(!showClearButton);
                setSearchQuery("");
                console.log("after" + searchQuery);
        }

        function handleInputClick() {
                borderColorRef.current.classList.add("addThisClassAfterInputClick");
                console.log(borderColorRef.current.classList.add("mother"));
                console.log(borderColorRef.current.classList.add("motherTemp"));
                setIsClickedOnInput(true);
        }
        function handleMobileToDesktopSearchBar() {
                setMobileToDesktopSearchBar(!mobileToDesktopSearchBar);
                console.log(mobileToDesktopSearchBar);
                console.log("you clicked");
        }
        function handleSidebarOpenClose(e) {
                if (!sidebarref.current.contains(e.target)) {
                        setIsSidebarOpen(false)
                        setIsBlurComponentOn(false);
                }

        }
        useEffect(() => {
                document.addEventListener("mousedown", handleSidebarOpenClose);
                return () => document.removeEventListener("mousedown", handleSidebarOpenClose);
        });
        function sendCategory(categoryObj) {

                setSelectedCategory(categoryObj);
        }
        document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
        return (
                <>
                        <Sidebar sidebarref={sidebarref} isSidebarOpen={isSidebarOpen} setIsBlurComponentOn={setIsBlurComponentOn}
                                setIsSidebarOpen={setIsSidebarOpen} sendCategory={sendCategory} />
                        <BlurTextureComponent isBlurCompnentOn={isBlurCompnentOn} isSidebarOpen={isSidebarOpen} />
                        {mobileToDesktopSearchBar ? (
                                <div className="tempNavbarContainer">
                                        <div className="navbar-middle-tempSearchBar">
                                                <div className="backToHome">
                                                        <KeyboardBackspaceIcon
                                                                className="backToHomeButton"
                                                                onClick={handleMobileToDesktopSearchBar}
                                                        />
                                                </div>
                                                <div
                                                        ref={borderColorRef}
                                                        className="search-input-tempSearchBar borderBeforeClickTempSearchBar"
                                                >
                                                        {isClickedOnInput && (
                                                                <SearchIcon
                                                                        className="tempSearchBarSearch"
                                                                        sx={{
                                                                                fontSize: 30,
                                                                                float: "left",
                                                                                margin: "5px 0px 5px 15px"
                                                                        }}
                                                                />
                                                        )}

                                                        <input
                                                                type="text"
                                                                placeholder="Search"
                                                                value={searchQuery}
                                                                onChange={(e) => {
                                                                        setSearchQuery(e.target.value);
                                                                }}
                                                                onClick={handleInputClick}
                                                        />
                                                        <span className="search-clear-tempSearchBar">
                                                                {searchQuery.length > 0 && (
                                                                        <ClearIcon
                                                                                className="tempSearchBarClear"
                                                                                sx={{ fontSize: 30 }}
                                                                                onClick={clearQuery}
                                                                        />
                                                                )}
                                                        </span>
                                                </div>
                                                <div className="search-bar-button-tempSearchBar">
                                                        <SearchIcon sx={{ fontSize: 30, margin: "0px 5px 0px 5px" }} />
                                                </div>
                                        </div>
                                </div>
                        ) : (
                                <header className="navbar-header" >
                                        <nav className="navbar">
                                                <div className="navbar-left">
                                                        <div className="hamburger-div">
                                                                <MenuIcon className="hamburger" sx={{ fontSize: 30 }} onClick={() => { setIsSidebarOpen(!isSidebarOpen); setIsBlurComponentOn(true) }} />
                                                        </div>
                                                        <div className="log-div">
                                                                <img
                                                                        className="logoSyle"
                                                                        src={
                                                                                "https://th.bing.com/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&w=350&h=77&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                                                                        }
                                                                        alt="logo"
                                                                />
                                                        </div>
                                                </div>
                                                {/* ----------------Search bar--------------------------------------------     */}

                                                <div className="navbar-middle">
                                                        <div
                                                                className="search-input borderBeforeClick"
                                                                ref={borderColorRef}
                                                        >
                                                                {isClickedOnInput && (
                                                                        <SearchIcon
                                                                                sx={{
                                                                                        fontSize: 30,
                                                                                        float: "left",
                                                                                        margin: "5px 0px 5px 15px"
                                                                                }}
                                                                        />
                                                                )}
                                                                <input
                                                                        type="text"
                                                                        placeholder="Search"
                                                                        value={searchQuery}
                                                                        onChange={(e) => {
                                                                                setSearchQuery(e.target.value);
                                                                                console.log(searchQuery);
                                                                        }}
                                                                        onClick={handleInputClick}
                                                                />
                                                                <span className="search-clear">
                                                                        {searchQuery.length > 0 && (
                                                                                <ClearIcon sx={{ fontSize: 30 }} onClick={clearQuery} />
                                                                        )}
                                                                </span>
                                                        </div>
                                                        <div className="search-bar-button">
                                                                <SearchIcon sx={{ fontSize: 30, margin: "0px 5px 0px 5px" }} />
                                                        </div>
                                                </div>

                                                {/* {mobileToDesktopSearchBar && <MiddleNavbar />} */}
                                                <div className="navbar-middle-mobile">
                                                        <div className="search-for-mobile">
                                                                <SearchIcon
                                                                        sx={{ fontSize: 30 }}
                                                                        onClick={handleMobileToDesktopSearchBar}
                                                                />
                                                        </div>
                                                </div>

                                                {/*  --------------------------------Right menu-------------------------------------- */}
                                                <div className="navbar-right">
                                                        <div className="right-child">
                                                                <span className="video-upload">
                                                                        <VideoCallOutlinedIcon className="videoCapture" sx={{ fontSize: 30 }} />
                                                                </span>
                                                                <div className="bell">
                                                                        <NotificationsNoneOutlinedIcon className="notificationBell" sx={{ fontSize: 30 }} />
                                                                </div>
                                                                <div className="profile">
                                                                        <img
                                                                                src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
                                                                                alt="profile"
                                                                        />
                                                                </div>
                                                        </div>
                                                </div>
                                        </nav>
                                </header>

                        )}
                        <ButtonComponent />
                        <FeedVideos selectedCategory={selectedCategory} isSidebarOpen={isSidebarOpen}
                        />
                        <MiniSidebar />
                </>
        );
}
