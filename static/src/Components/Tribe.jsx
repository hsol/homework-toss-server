import React from 'react'
import SquadList from "../Lists/SquadList";

import {getRandomColor} from '../Utils/bulmaColors'

const defaultProps = {
    model: {}
};

class Tribe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const randomColor = getRandomColor();

        return (<section className={'column'} key={this.props.model.id}>
            <div className={'box has-background-' + randomColor} style={{borderRadius:'30px'}}>
                <div className={'has-text-centered has-text-white is-size-3'}>
                    <h1>Tribe</h1>
                    <p>{this.props.model.name}</p>
                </div>
                <hr className={'is-clearfix'}/>
                <SquadList id={this.props.model.id} color={randomColor}/>
            </div>
        </section>)
    }
}

Tribe.defaultProps = defaultProps;
export default Tribe