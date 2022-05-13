import React from "react";
import { BackgroundImage, Body, CategoriesListItemContainer} from './categories-list-item.styles';

const CategoriesListItem = ({ category }) => {
    const {imageUrl, title} = category;
    return(
        <CategoriesListItemContainer >
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoriesListItemContainer>
    );
}


export default CategoriesListItem;