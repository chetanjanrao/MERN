import "./MiniSidebarStyles.css"
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
export default function MiniSidebar() {
          return (
                    <div className="ytd-mini-sidebar">
                              <div className="ytd-mini-container">
                                        <div className="ytd-mini-sidebar-item">
                                                  <div className="ytd-mini-sidebar-icon"><HomeIcon /></div>
                                                  <span className="ytd-mini-sidebar-title">Home</span>
                                        </div>
                                        <div className="ytd-mini-sidebar-item">
                                                  <div className="ytd-mini-sidebar-icon"><SlowMotionVideoIcon /></div>
                                                  <span className="ytd-mini-sidebar-title">Shorts</span>
                                        </div>
                              </div>

                    </div>
          )
}