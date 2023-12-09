//import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useRef, useState, } from "react";
import { flushSync } from "react-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../ButtonComponent/ButtonComponentStyles.css"
const buttonWithCategory = [
          {
                    id: 0,
                    btnCategory: "1"
          },
          {
                    id: 1,
                    btnCategory: "javascript"
          },
          {
                    id: 2,
                    btnCategory: "music"
          },
          {
                    id: 3,
                    btnCategory: "jethalal gada"
          },
          {
                    id: 4,
                    btnCategory: "algorithm"
          }, {
                    id: 5,
                    btnCategory: "T20 cricket"
          },
          {
                    id: 6,
                    btnCategory: "bollywood"
          },
          {
                    id: 7,
                    btnCategory: "all"
          },
          {
                    id: 8,
                    btnCategory: "javascript"
          },
          {
                    id: 9,
                    btnCategory: "music"
          },
          {
                    id: 10,
                    btnCategory: "jethalal gada"
          },
          {
                    id: 11,
                    btnCategory: "algorithm"
          },
          {
                    id: 12,
                    btnCategory: "T20 cricket"
          },
          {
                    id: 13,
                    btnCategory: "13"
          }
]
export default function ButtonComponent() {
          const selectedRef = useRef(null);
          const [index, setIndex] = useState(0);

          //const hasPrev = index > 0;
          //const hasNext = index < buttonWithCategory.length - 1;
          function handlePreviousButton() {

                    flushSync(() => {
                              if (index < buttonWithCategory.length - 1) {
                                        setIndex(index - 1);
                              } else {
                                        setIndex(buttonWithCategory.lengh);
                              }
                    });

                    selectedRef.current.scrollIntoView({
                              behavior: 'smooth',
                              block: 'end',
                              inline: "center"
                    })

          }
          function handleNextButton() {
                    flushSync(() => {
                              if (index < buttonWithCategory.length - 1) {
                                        setIndex(index + 1);
                              } else {
                                        setIndex(0);
                              }
                    });
                    selectedRef.current.scrollIntoView({
                              behavior: 'smooth',
                              bloack: "end",
                              inline: "center"
                    })

          }

          return (
                    <>
                              <div className="btn-component">
                                        <div className="pervious-btn" onClick={handlePreviousButton}><ArrowBackIosIcon fontSize="small" /></div>
                                        <div className='button-category'>
                                                  {
                                                            buttonWithCategory.map((button, i) => (

                                                                      <div className={index === i ? "active" : "button"} ref={index === i ? selectedRef : null} key={button.id} > {button.btnCategory}</div>
                                                            ))
                                                  }
                                        </div>

                                        <div className='next-btn' onClick={handleNextButton}><ArrowForwardIosIcon fontSize="small" /></div>
                              </div>
                    </>
          )
}