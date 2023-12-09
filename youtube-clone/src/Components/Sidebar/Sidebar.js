import "./SidebarStyles.css";
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MenuIcon from "@mui/icons-material/Menu";
import TimelineIcon from '@mui/icons-material/Timeline';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { forwardRef } from "react";

const exploreIcons = [
          {
                    iconId: 0,
                    icon: <TimelineIcon />,
                    iconName: "Trend"
          },
          {
                    iconId: 1,
                    icon: <MusicNoteIcon />,
                    iconName: "Music"
          },
          {
                    iconId: 2,
                    icon: <MovieIcon />,
                    iconName: "Movie"
          },
          {
                    iconId: 3,
                    icon: <NewspaperIcon />,
                    iconName: "News"
          },
          {
                    iconId: 4,
                    icon: <EmojiEventsIcon />,
                    iconName: "Sports"
          }
          ,
          {
                    iconId: 5,
                    icon: <TimelineIcon />,
                    iconName: "Trend"
          },
          {
                    iconId: 6,
                    icon: <MusicNoteIcon />,
                    iconName: "Music"
          },
          {
                    iconId: 7,
                    icon: <MovieIcon />,
                    iconName: "Movie"
          },
          {
                    iconId: 8,
                    icon: <NewspaperIcon />,
                    iconName: "News"
          },
          {
                    iconId: 9,
                    icon: <EmojiEventsIcon />,
                    iconName: "Sports"
          }
]
// import { SidebarPersonalIcons } from "./SidebarPersonalIcons";
const Sidebar = ({ props, sidebarref, isSidebarOpen, setIsBlurComponentOn,
          setIsSidebarOpen, sendCategory }) => {

          //          console.log("sidebar" + isSidebarOpen)
          return (
                    <>
                              <div className={`sidebar-container ${isSidebarOpen ? "active" : "inactive"}`}  {...props} ref={sidebarref} >
                                        <div className="sidebar-header">
                                                  <div className="sidebar-header-item">
                                                            <MenuIcon className="sidebar-hamburger" sx={{ fontSize: 30 }} />
                                                            <img src={"https://th.bing.com/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&w=350&h=77&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                                                            } alt="logo" />
                                                  </div>
                                        </div>
                                        {/*-------------------------------------- sidebar Icons ------------------------------------- */}
                                        <div className="sidebar-icons-container">
                                                  <div className="sidebar-icons-parent">
                                                            <div className="sidebar-icon">
                                                                      <HomeIcon className="sidebar-home" />
                                                                      {/* <input {...props} ref={inputRef} /> */}
                                                                      <span className="sidebar-icon-title">Home</span>
                                                            </div>
                                                            <div className="sidebar-icon">
                                                                      <SlowMotionVideoIcon className="sidebar-shor" />
                                                                      <span className="sidebar-icon-title">Shorts</span>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className="explore"><h3>Explore</h3></div>
                                        <div className="explore-parent">
                                                  <div className="explore-container">
                                                            {exploreIcons.map((exploreIcon) => (
                                                                      <div className="explore-item" key={exploreIcon.iconId} onClick={() => {
                                                                                setIsBlurComponentOn(false);
                                                                                setIsSidebarOpen(false);
                                                                                sendCategory(exploreIcon.iconName);
                                                                      }}>
                                                                                {/* {console.log(exploreIcon.iconId)} */}
                                                                                <div className="explore-icon">{exploreIcon.icon}</div>
                                                                                <span className="explore-name">{exploreIcon.iconName}</span>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                                        <div className="sidebar-footer">
                                                  <p className="footer-para">About Press Copyright Contact us Creators Advertise Developers.</p>
                                                  <p className="footer-para">Terms Privecy Policy & Safety How Youtube works on New Feature Test.</p>
                                                  <p className="footer-copyright"> &#169; 2023  JRChetan & NishP</p>
                                        </div>
                              </div>
                    </>
          )
}

export default forwardRef(Sidebar);
