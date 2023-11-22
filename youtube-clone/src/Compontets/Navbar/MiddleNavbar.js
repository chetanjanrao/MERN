import { useState, useRef } from "react";
import "./NavbarStyles.css";
//import MiddleNavbar from "./MiddleNavbar";
//import youtubeDesktop from "../../utils/Navbar/YoutubeDesktop.png"
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
//import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ClearIcon from '@mui/icons-material/Clear';
/*------------------------------  import for App---------------------------------------------------------------------------------- */
export default function MiddleNavbar() {
          const [searchQuery, setSearchQuery] = useState("")    // for taking input value
          const [showCancleButton, setShowCancleButton] = useState(true)
          const [isClickedOnInput, setIsClickedOnInput] = useState(false)
          //const [mobileToDesktopSearchBar, setMobileToDesktopSearchBar] = useState(true)
          const borderColorRef = useRef(null)


          function clearQuery() {

                    console.log("before" + searchQuery.length)
                    setShowCancleButton(!showCancleButton)
                    setSearchQuery("")
                    console.log("after" + searchQuery)
          }

          function handleInputClick() {
                    // borderColorRef.current.classList.add("addThisClassAfterInputClick")
                    console.log(borderColorRef.current.classList.add("mother"))
                    setIsClickedOnInput(true)

          }
          // function handleMobileToDesktopSearchBar() {
          //           setMobileToDesktopSearchBar(!mobileToDesktopSearchBar)

          // }

          return (
                    <>

                              {/* ----------------Search bar--------------------------------------------     */}
                              {/* {mobileToDesktopSearchBar && <MiddleNavbar />} */}
                              <div className="navbar-middle">
                                        <div className="search-input borderBeforeClick" ref={borderColorRef} >
                                                  {
                                                            isClickedOnInput && <SearchIcon sx={{ fontSize: 30, float: "left", margin: "5px 0px 5px 15px" }} />
                                                  }
                                                  <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} onClick={handleInputClick} />
                                                  <span className="search-clear">
                                                            {searchQuery &&
                                                                      <ClearIcon sx={{ fontSize: 30 }} onClick={clearQuery} />
                                                            }
                                                  </span>
                                        </div>
                                        <div className="search-bar-button">
                                                  <SearchIcon sx={{ fontSize: 30, margin: "0px 5px 0px 5px" }} />
                                        </div>
                              </div>
                    </>
          )
}