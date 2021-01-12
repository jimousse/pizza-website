import React from 'react';
import CustomButton from '../base/button/CustomButton';
import BadgeNew from '../badge-new/BadgeNew';
import TextWithTruncation from '../base/text-with-truncation/TextWithTruncation';
import variables from '../../styles/variables.module.scss';

import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="product-card">
        <img src={this.props.image} alt="Product" />
        <div className="name">
          <TextWithTruncation
            maxNumOfLines={1}
            fontSize={variables.fontSizeM}
            fontFamily={variables.fontFamily}
            lineHeight={variables.lineHeight}
            text={this.props.name}
          />
        </div>
        <div className="description">
          <TextWithTruncation
            maxNumOfLines={3}
            fontSize={variables.fontSizeS}
            fontFamily={variables.fontFamily}
            lineHeight={variables.lineHeight}
            text={this.props.description}
          />
        </div>
        {this.props.isNew &&
        <div className="badge">
          <BadgeNew />
        </div>}
        <CustomButton text={'BESTEL ONLINE'} />
      </div>
    );
  }
}

export default ProductCard;
