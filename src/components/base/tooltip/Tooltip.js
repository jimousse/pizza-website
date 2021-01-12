import React from 'react';
import ReactDOM from 'react-dom';
import './Tooltip.scss';

const OFFSET = 2;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden'
    };
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll() {
    this.hide();
  }

  show(hoveredRect) {
    this.computePosition(hoveredRect);
    this.setState({
      visibility: 'visible'
    });
  }

  hide() {
    this.setState({
      visibility: 'hidden'
    });
  }

  computePosition(hoveredRect) {
    const { x, y } = hoveredRect;
    let tooltipNode = ReactDOM.findDOMNode(this);
    const tooltipRect = tooltipNode.getBoundingClientRect();
    const topPosition = y - tooltipRect.height - OFFSET;
    const bottomPosition = y + hoveredRect.height + OFFSET;
    this.setState({
      left: x,
      top: topPosition > 0 ? topPosition : bottomPosition
    });
  }

  render() {
    const { visibility, left, top } = this.state;
    return (
      <span style= {{ visibility, left, top }} className="tooltip">
        {this.props.content}
      </span>
    );
  }
}

export default Tooltip;
