import React from 'react';
import CustomButton from '../base/button/CustomButton';
import BadgeNew from '../badge-new/BadgeNew';
import TextWithTruncation from '../base/text-with-truncation/TextWithTruncation';
import Dropdown from '../base/dropdown/Dropdown';
import variables from '../../styles/variables.module.scss';

import './ProductCard.scss';

const list = [ 
  { id: 's', label: '25 cm small' },
  { id: 'm', label: '30 cm medium' },
  { id: 'l', label: '35 cm large' }
];

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
        <div className="size-select">
          <Dropdown title={"Select size"} items={list}  />
        </div>
        <CustomButton horizontalExtend>
          <span className="order-label">Bestel Online</span>
        </CustomButton>
      </div>
    );
  }
}

export default ProductCard;
