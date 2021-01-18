import React from 'react';
import CustomButton from '../base/button/CustomButton';
import BadgeNew from '../badge-new/BadgeNew';
import TextWithTruncation from '../base/text-with-truncation/TextWithTruncation';
import Dropdown from '../base/dropdown/Dropdown';
import variables from '../../styles/variables.module.scss';

import './ProductCard.scss';

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="Product" />
      <div className="name">
        <TextWithTruncation
          maxNumOfLines={1}
          fontSize={variables.fontSizeM}
          fontFamily={variables.fontFamily}
          lineHeight={variables.lineHeight}
          text={props.name}
        /> 
      </div>
      {props.description &&
      <div className="description">
        <TextWithTruncation
          maxNumOfLines={3}
          fontSize={variables.fontSizeS}
          fontFamily={variables.fontFamily}
          lineHeight={variables.lineHeight}
          text={props.description}
        />
      </div>}
      {props.isNew &&
      <div className="badge">
        <BadgeNew />
      </div>}
      <div className="size-select">
        <Dropdown title={"Select size"} items={props.sizes}  />
      </div>
      <CustomButton horizontalExtend>
        <span className="order-label">Bestel Online</span>
      </CustomButton>
    </div>
  );
}
