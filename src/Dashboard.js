import React from 'react'
import SearchRemember from "./SearchRemember";
import MainSearch from "./MainSearch"

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <MainSearch />
                <SearchRemember />
            </div>
        )
    }
}

export default Dashboard
