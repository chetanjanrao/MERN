//import Stack from '@mui/material/Stack';
//import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './Components/Navbar/Navbar';
//import Sidebar from "./Components/Sidebar/Sidebar"
import { useRef, useEffect } from "react";
import "./App.css"
import LoadingBar from 'react-top-loading-bar'
function App() {
        const ref = useRef(null)
        useEffect(() => {
                ref.current.complete()
        })
        return (
                <div className='app'>
                        <LoadingBar className="loading-bar" ref={ref} />
                        {/* <Stack sx={{ width: '100%', color: "red" }} >
                                <LinearProgress color="secondary" />                        
                        </Stack> */}
                        <Navbar />
                        {/* <Sidebar /> */}

                </div>
        );
}

export default App;
