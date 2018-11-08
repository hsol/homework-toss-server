import React from 'react'
import Axios from 'axios'
import Tribe from "../Components/Tribe";

const API_PATH = 'http://localhost:8080';

export default class TribeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tribes: []
        }
    }

    fetchTribes() {
        Axios.get(`${API_PATH}/tribes`)
            .then(response => {
                this.setState({tribes: response.data})
            })
            .catch(() => {
            })
    }

    componentDidMount() {
        this.fetchTribes.call(this)
    }

    render() {
        return (
            <div className={'columns is-desktop'}>
                {this.state.tribes.map((tribe, index) => {
                    return <Tribe key={index} model={tribe}/>
                })}
            </div>
        )
    }
}