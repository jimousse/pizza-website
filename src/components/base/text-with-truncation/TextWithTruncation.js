import React, { useState, useRef, useEffect } from 'react';
import Tooltip from '../tooltip/Tooltip';
import { generic } from 'Utils';
const { 
  measureText, 
  converRemIntoPx,
  truncateStringToWidth 
} = generic;


export default function TextWidthTruncation(props) {
  const tooltipRef = useRef(null);
  const [ isTruncated, setIsTruncated ] = useState(false);
  const [ displayText, setDisplayText ] = useState(false);
  const [ fullText, setFullText ] = useState(false);
  // calculate size related stuff based on props
  const { fontFamily, fontSize, maxNumOfLines, text, lineHeight } = props;
  const fontSizeInPx = converRemIntoPx(fontSize);
  const targetHeight = fontSizeInPx*Number(lineHeight)*maxNumOfLines;


  function setDescriptionRef(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    handleTruncation(rect);
  };

  function handleMouseOver(e) {
    if (!tooltipRef.current) return;
    // get hovered element
    const rect = e.currentTarget.getBoundingClientRect();
    tooltipRef.current.show(rect);
  }

  function handleMouseOut() {
    if (!tooltipRef.current) return;
    tooltipRef.current.hide();
  }

  function handleTruncation(rect) {
    // first we calculate the total width the text would take, including wrapping
    const { totalWidth } =  calculateWrapSpaceWidth(text, rect.width);
    const targetWidth = maxNumOfLines * rect.width;
    // check if need for truncation
    if (totalWidth > targetWidth) {
      // we need to determine the space we lose because of wrapping
      // to know how much to truncate
      const newWrappingInfo = calculateWrapSpaceWidth(text, rect.width, targetWidth);
      const display = truncateStringToWidth(text, targetWidth - newWrappingInfo.extraWrappingSpace, fontFamily, fontSizeInPx, false);
      setIsTruncated(true);
      setDisplayText(display);
      setFullText(text);
    } else {
      setIsTruncated(false);
      setIsTruncated(false);
      setDisplayText(text);
    }
  }

  function calculateWrapSpaceWidth(text, lineWidth, totalMaximumWidth = Infinity) {
    let wordsWithSpaces = [];
    const words = text.split(' ');
    words.forEach((w, i) => {
      wordsWithSpaces.push(w);
      if (i < words.length - 1) wordsWithSpaces.push(' ');
    });
    let totalWidth = 0;
    let buffer = 0;
    let extraWrappingSpace = 0;
    debugger;
    for(let i =0; i< wordsWithSpaces.length; i++) {
      let currentWordWidth = measureText(wordsWithSpaces[i], fontFamily, fontSizeInPx).width;

      // add letter to buffer
      // check if we reached the end of the line
      if (buffer + currentWordWidth > lineWidth) {
        // add to total
        totalWidth += lineWidth;
        if (totalWidth >= totalMaximumWidth) {
          break;
        } else if (i !== wordsWithSpaces.length - 1) {
          extraWrappingSpace += lineWidth - buffer;
        }

        // reset buffer
        buffer = currentWordWidth;
      } else {
        buffer += currentWordWidth;
      }

      if (i === wordsWithSpaces.length - 1) {
        totalWidth += buffer;
      }
    };
    return {
      totalWidth,
      extraWrappingSpace
    };
  }

  return (
    <div
      ref={setDescriptionRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="truncated-text"
      style={{
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        lineHeight: props.lineHeight,
        height: `${targetHeight}px`
      }}
    >
      {displayText}
      {isTruncated &&
      <Tooltip
        ref={tooltipRef}
        content={fullText}
      />}
    </div>
  );
}