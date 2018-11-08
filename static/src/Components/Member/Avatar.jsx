import React from 'react'
import {getPositionAvatar} from '../../Constants/positions'

export default function ({model}) {
    return <figure className={'image has-text-centered'}>
        <img className={'is-inline-block'}
             src={getPositionAvatar(model.position)}
             alt={model.name}
             style={{maxWidth: '3vw', minWidth: '6vh'}}/>
    </figure>
}
