import React from 'react';
import './frame.scss'
import icon from '../../../assets/ic-key-frame.svg'

export default function Frame() {

    return (
        <div className="ui-frame">
            <div className="ui-frame__header">
                <img src={icon}/>
                <label className="ui-frame__header-text">Set key frame</label>
            </div>
            <div className="ui-frame__body">
                {/*<h2>Key frame</h2>*/}
            </div>
        </div>
    );
}

