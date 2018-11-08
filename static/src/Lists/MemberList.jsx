import React from 'react'
import Axios from 'axios'
import Squad from '../Components/Squad';
import Member from "../Components/Member";

const API_PATH = 'http://localhost:8080';

const defaultProps = {
    id: null,
};

class MemberList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members: []
        }
    }

    fetchMembers() {
        Axios.get(`${API_PATH}/members/?search=${this.props.id}`)
            .then(response => {
                this.setState({members: response.data})
            })
            .catch(() => {
            })
    }

    componentDidMount() {
        this.fetchMembers.call(this)
    }

    render() {
        return (
            <div>
                {this.state.members.map(member => {
                    return <Member key={member.id} model={member}/>
                })}
            </div>
        )
    }
}

MemberList.defaultProps = defaultProps;
export default MemberList