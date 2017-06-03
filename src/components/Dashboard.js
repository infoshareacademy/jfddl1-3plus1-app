import React from 'react'
import MainSearch from "./MainSearch"
import LastAddedFavoriteList from "./LastAddedFavoriteList";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainSearch />
                <LastAddedFavoriteList />
            </div>
        )
    }
}

export default Dashboard