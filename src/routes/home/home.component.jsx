import React from "react";
import CategoriesList from '../../components/categories-list/categories-list.component';
import { Outlet } from 'react-router-dom';

function Home() {

  

  return (
    <div>
      <CategoriesList/>
      <Outlet/>
    </div>
    
  );
}

export default Home;