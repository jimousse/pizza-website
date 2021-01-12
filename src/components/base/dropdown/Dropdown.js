import React from 'react';
import './Dropdown.scss';

const list = [ 'Apples', 'Oranges', 'Fraises' ];

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false
    };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    const isOpen = this.state.isListOpen;
    this.setState({
      isListOpen: !isOpen
    });
  }

  render() {
    const { isListOpen } = this.state;
    return (
      <div className="dropdown">
        <button
          onClick={this.toggleList}
          className="header">
          Select Fruits

          <span className={`arrow ${isListOpen ? 'up' : 'down'}`}/>
        </button>
        {isListOpen &&
          <div className="dropdown-list">
            {list.map(item => {
              return (
                <div className="dropdown-item">
                  {item}
                </div>
              );
            })}
          </div>
        }

      </div>
    );
  }
}

export default Dropdown;
