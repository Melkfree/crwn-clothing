import React from "react";
import './categories-list.styles.scss';
import CategoriesListItem from "../categories-list-item/categories-list-item.component";

const CategoriesList = ({categories}) => {
    return(
        <div className="categories-container">
            {categories.map((category)=>(
                <CategoriesListItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoriesList;