import React from 'react'
import FavouriteBrands from "./FavouriteBrands";
import MainSearch from "./MainSearch"
import ProductList from './ProductList'
import Marka from "./Marka"; //by RC

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainSearch/>
                <FavouriteBrands/>
                <Marka/>
            </div>
        )
    }
}

export default Dashboard
