import React from "react";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div className="Menu">
        <div className="container">
          <button type="button" class="button">
            ☰
          </button>
          <div class="dropdown">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
