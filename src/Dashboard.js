import React from 'react'
import FavouriteBrands from "./FavouriteBrands";
import MainSearch from "./MainSearch"

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainSearch/>
                <FavouriteBrands/>
            </div>
        )
    }
}

export default Dashboard
