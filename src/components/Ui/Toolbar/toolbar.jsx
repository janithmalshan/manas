import React from 'react';
import './toolbar.scss';
import ic1 from '../../../assets/icons/ic-tool-01.svg';
import ic2 from '../../../assets/icons/ic-tool-02.svg';
import ic3 from '../../../assets/icons/ic-tool-03.svg';
import ic4 from '../../../assets/icons/ic-tool-04.svg';
import ic5 from '../../../assets/icons/ic-tool-05.svg';
import ic6 from '../../../assets/icons/ic-tool-06.svg';
import ic7 from '../../../assets/icons/ic-tool-07.svg';
import ic8 from '../../../assets/icons/ic-tool-08.svg';
import ic9 from '../../../assets/icons/ic-tool-09.svg'

export default function Toolbar() {

    return (
        <div className="ui-toolbar">
            <ToolItem toolicon={ic1} toolhint="#$&*"/>
            <ToolItem toolicon={ic2} toolhint="#$&*"/>
            <ToolItem toolicon={ic3} toolhint="#$&*"/>
            <ToolItem toolicon={ic4} toolhint="#$&*"/>
            <ToolItem toolicon={ic5} toolhint="#$&*"/>
            <ToolItem toolicon={ic6} toolhint="#$&*"/>
            <ToolItem toolicon={ic7} toolhint="#$&*"/>
            <ToolItem toolicon={ic8} toolhint="#$&*"/>
            <ToolItem toolicon={ic9} toolhint="#$&*"/>
        </div>
    );
}

const ToolItem = (props) => {
    return (
        <div className="ui-toolbar__item">
            <img className="ui-toolbar__item-icon" src={props.toolicon} alt="Prestau"/>
            {/*<h3 className="ui-why-item__title">{props.txtTitle}</h3>*/}
            <p className="ui-why-item__desc">{props.toolhint}</p>
        </div>
    )
};
