import React from 'react'
import Avatar from "./Avatar";
import {getPositionName} from "../../Constants/positions";

const defaultProps = {
    model: {}
};

class Member extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            model: this.props.model
        }
    }

    render() {
        return (<div className={'has-text-centered toggle-hover'} style={{marginTop: '1vh'}}>
            <Avatar model={this.state.model}/>
            <div className={'has-text-white is-size-7 off-hover'}>{getPositionName(this.state.model.position)}</div>
            <div className={'has-text-light is-size-7 on-hover'}>{this.state.model.name}</div>
        </div>)
    }
}

Member.defaultProps = defaultProps;
export default Member
