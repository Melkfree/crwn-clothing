import React from "react";
import './categories-list-item.styles.scss';

const CategoriesListItem = ({ category }) => {
    const {imageUrl, id, title} = category;
    return(
        <div key={id} className='categories-list-item-container'>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
          <div className='body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    );
}


export default CategoriesListItem;