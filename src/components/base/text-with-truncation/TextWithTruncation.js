import React from 'react';
import Tooltip from '../tooltip/Tooltip';
import { measureText, converRemIntoPx, truncateStringToWidth } from '../../../utils/general';


class TextWithTruncation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tooltipRef = React.createRef();
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.setDescriptionRef = this.setDescriptionRef.bind(this);
  }

  setDescriptionRef(element) {
    const rect = element.getBoundingClientRect();
    this.handleTruncation(this.props.text, rect);
  };

  handleMouseOver(e) {
    if (!this.tooltipRef.current) return;
    // get hovered element
    const rect = e.currentTarget.getBoundingClientRect();
    this.tooltipRef.current.show(rect);
  }

  handleMouseOut() {
    if (!this.tooltipRef.current) return;
    this.tooltipRef.current.hide();
  }

  handleTruncation(text, rect) {
    const { fontFamily, fontSize, maxNumOfLines } = this.props;
    const fontSizeInPx = converRemIntoPx(fontSize);
    let { totalWidth } =  this.calculateWrapSpaceWidth(text, rect.width);
    const numOfLines = Math.ceil(totalWidth / rect.width);
    if (numOfLines > maxNumOfLines) {
      const targetWidth = maxNumOfLines * rect.width; // 0.8 just to be safe
      const newWrappingInfo = this.calculateWrapSpaceWidth(text, rect.width, maxNumOfLines);
      const display = truncateStringToWidth(text, targetWidth - newWrappingInfo.extraWrappingSpace, fontFamily, fontSizeInPx);
      this.setState({
        truncated: true,
        display,
        full: text
      });
    } else {
      this.setState({
        truncated: false,
        display: text
      });
    }
  }

  calculateWrapSpaceWidth(text, lineWidth, numberOfLines = Infinity) {
    const { fontFamily, fontSize } = this.props;
    const fontSizeInPx = converRemIntoPx(fontSize);
    const words = text.split(' ');
    const maximumWidth = numberOfLines*lineWidth;
    const spaceLength = measureText(' ', fontFamily, fontSizeInPx).width;
    let totalWidth = 0;
    let buffer = 0;
    let extraWrappingSpace = 0;
    for(let i =0; i< words.length; i++) {
      let currentWordWidth = measureText(words[i], fontFamily, fontSizeInPx).width;
      // add word length
      totalWidth += currentWordWidth;
      if (i < words.length - 1) {
        totalWidth += spaceLength;
      }
      // reached the limit of the line, this word goes to the next line
      if (buffer + currentWordWidth > lineWidth) {
        let extraSpace = lineWidth - buffer;
        if (totalWidth + extraSpace > maximumWidth) break;
        extraWrappingSpace += extraSpace;
        totalWidth += extraSpace;
        buffer = 0;
      }
      buffer += currentWordWidth;
    };
    return {
      totalWidth,
      extraWrappingSpace
    };
  }

  render() {
    const { fontSize, lineHeight, maxNumOfLines } = this.props;
    const fontSizeInPx = converRemIntoPx(fontSize);
    const targetHeight = fontSizeInPx*Number(lineHeight)*maxNumOfLines;
    return (
      <div
        ref={this.setDescriptionRef}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        className="truncated-text"
        style={{
          fontSize: this.props.fontSize,
          fontFamily: this.props.fontFamily,
          lineHeight: this.props.lineHeight,
          height: `${targetHeight}px`
        }}
      >
        {this.state.display}
        {this.state.truncated &&
        <Tooltip
          ref={this.tooltipRef}
          content={this.state.full}
        />}
      </div>
    );
  }
}

export default TextWithTruncation;
