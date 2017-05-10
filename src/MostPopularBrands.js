import React from 'react'

class MostPopularBrands extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            mostPopularBrands: []
        };

        fetch(
            process.env.PUBLIC_URL + '/data.data.json'
        ).then(
            response => response.json()
        ).then(
            mostPopularBrands => this.setState({
                mostPopularBrands: mostPopularBrands
            })
        )
    }

    render() {
        const brand = parseInt(this.props.match.params.brand, 10)
        return (
            <div>
                Group: {studentIdId}
                {
                    this.state.students.filter(
                        student => student.id === studentId
                    ).map(
                        student => (
                            <ul key={student.id}>
                                <li>{student.name}</li>
                                <li>{student.city}</li>
                            </ul>
                        )
                    )
                }
            </div>
        )
    }
}

export default MostPopularBrands