import React from 'react'
import FavouriteBrands from "./FavouriteBrands";
import MainSearch from "./MainSearch"
import Brand from "./Brand"; //by RC

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainSearch/>
                <FavouriteBrands/>
                <Brand/>
            </div>
        )
    }
}

export default Dashboard
