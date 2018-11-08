import React from 'react'
import MemberList from "../Lists/MemberList";
import {getRandomColor} from '../Utils/bulmaColors'

const defaultProps = {
    color: null,
    model: {}
};

class Squad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={'column'}>
            <div className={'box has-background-' + getRandomColor(this.props.color)}>
                <div className={'has-text-centered has-text-white'}>
                    <h1 className={'is-size-6'}>Squad</h1>
                    <p className={'has-text-centered'}>
                        <span className={'is-size-7'} style={{
                            display: 'inline-block',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            wordWrap: 'normal',
                            width: '80px',
                            overflow: 'hidden'
                        }}>({this.props.model.name})</span>
                    </p>
                </div>
                <hr/>
                <MemberList id={this.props.model.id}/>
            </div>
        </div>
    }
}

Squad.defaultProps = defaultProps;
export default Squad