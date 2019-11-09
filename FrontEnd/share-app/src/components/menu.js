import React, {useState} from "react";

const toggleMenu = () => {
  // const [toggleState, setToggleState] = useState("open");

  // const toggle = () => {
  //   setToggleState(
  //     toggleState === 
  //     "open" ? "close" : "open"
  //     );
  // };

  return (
    <div>
      <div class="header">
        <img
          class="menu-button"
          src="https://res.cloudinary.com/dfulxq7so/image/upload/v1572120379/menu_tef4jb.png"
        />
        <h1>Share</h1>
      </div>
      {/* <div class={`menu ${toggleState}`} onClick={toggle}> */}
        <ul>
          <li>A book</li>
          <li>A ride</li>
          <li>An idea</li>
          <li>A knowledge</li>
          <li>A meal</li>
          <li>An activity</li>
          <li>A tool</li>
          <li>A penny</li>
          <li>An experience</li>
          <li>A thought</li>
          <li>A space</li>
          <li>A business</li>
          <li>Others</li>
        </ul>
      
   </div> 
  );
};

export default toggleMenu;
