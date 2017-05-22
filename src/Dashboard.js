import React from 'react'
import LastAddedFavoriteList from "./LastAddedFavoriteList";
import MainSearch from "./MainSearch"

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
