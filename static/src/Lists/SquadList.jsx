import React from 'react'
import Axios from 'axios'
import Squad from '../Components/Squad';

const API_PATH = 'http://localhost:8080';

const defaultProps = {
    color: null,
    id: null,
};

class SquadList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squads: []
        }
    }

    fetchSquads() {
        Axios.get(`${API_PATH}/squads/?search=${this.props.id}`)
            .then(response => {
                this.setState({squads: response.data})
            })
            .catch(() => {
            })
    }

    componentDidMount() {
        this.fetchSquads.call(this)
    }

    render() {
        return (
            <div className={'columns'}>
                {this.state.squads.map(squad => {
                    return <Squad key={squad.id} model={squad} color={this.props.color}/>
                })}
            </div>
        )
    }
}

SquadList.defaultProps = defaultProps;
export default SquadList