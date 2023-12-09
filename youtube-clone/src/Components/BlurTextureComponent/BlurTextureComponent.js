import React from 'react';
import "./BlurTextureComponent.css"
export default function BlurTextureComponent({ isBlurCompnentOn, isSidebarOpen }) {
          console.log("in Blur component  ==  " + isSidebarOpen)
          document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
          return (
                    <div
                              className={`${isBlurCompnentOn ? 'blur-texture-active' : 'blur-texture-inactive'
                                        }`}
                    ></div>
          );
}
