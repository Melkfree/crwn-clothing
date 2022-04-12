import React from "react";
import './categories-list.styles.scss';
import CategoryItem from "../category-item/category-item.component";

const CategoriesList = ({categories}) => {
    console.log("Heeeey")
    return(
        <div className="categories-container">
            {categories.map((category)=>(
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoriesList;