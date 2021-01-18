import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.scss';
import CustomButton from '../button/CustomButton';

export  default function Dropdown(props) {
  const listRef = useRef(null);
  const [ isListOpen, setIsListOpen ] = useState(false);
  const [ headerTitle, setHeaderTitle ] = useState(props.title);
  const [ itemSelected, setItemSelected ] = useState(null);

  function toggleList() {
    setIsListOpen(!isListOpen);
  }

  function selectItem(item) {
    if (props.onItemSelect) {
      props.onItemSelect(item.id);
    }
    setIsListOpen(item ? false : isListOpen);
    setItemSelected(item.id);
    setHeaderTitle(item.label);
  }

    // detect click outside
    useEffect(() => {
      if (isListOpen && listRef.current) {
        listRef.current.focus();
      }
      // callback
      // if list is open and click outsite the list, close the list
      function handleClick(e) {
        if (isListOpen && listRef.current && !listRef.current.contains(e.target)) {
          toggleList();
        }
      }
      // attach click event
      window.addEventListener('click', handleClick);
      // remove event
      return function() {
        window.removeEventListener('click', handleClick);
      };
    });

  return (
    <div className="dropdown">
      <CustomButton
        id="dropdown-trigger"
        backgroundColor="#e4e6e7"
        onClick={toggleList}
        isActive={isListOpen}
        horizontalExtend
      >
        <span className="dropdown-label">{headerTitle}</span>
        <span style={{ float: 'right' }}>{isListOpen ? '↑' : '↓'}</span>
      </CustomButton>
      {isListOpen &&
        <div 
          className="dropdown-list" 
          ref={listRef}
          tabIndex="0"
        >
          {props.items.map((item,i) => {
            return (
              <div
                key={i}
                onClick={() => selectItem(item)}
                className="dropdown-item"
              >
                <span 
                  style={{ visibility: item.id === itemSelected ? 'visible' : 'hidden' }} 
                  className="dropdown-item-selected-icon"
                >
                  ✓
                </span>
                <span className="dropdown-item-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      }


    </div>
  );
}