import React from 'react';
import './propertybar.scss';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ictext from '../../../assets/icons/ic-tool-04.svg';
import icleft from '../../../assets/icons/ic-align-left.svg';
import iccenter from '../../../assets/icons/ic-align-center.svg';
import icright from '../../../assets/icons/ic-align-right.svg';
import ich from '../../../assets/icons/ic-align-h.svg';
import icv from '../../../assets/icons/ic-align-v.svg';
import icl from '../../../assets/icons/ic-align-l.svg';
import icc from '../../../assets/icons/ic-align-c.svg';
import icr from '../../../assets/icons/ic-align-r.svg';
import ict from '../../../assets/icons/ic-align-t.svg';
import icm from '../../../assets/icons/ic-align-m.svg';
import icb from '../../../assets/icons/ic-align-b.svg';

export default function Propertybar() {
    const [size, setSize] = React.useState('');
    const handleChange = (event) => {
        setSize(event.target.value);
    };
    return (
        <div className="ui-propertybar">
            <span className="ui-propertybar-1">
                <img src={ictext} alt="icon"/>
                <FormControl variant="outlined">
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={size}
                        onChange={handleChange}
                        // label="size"
                        displayEmpty
                        name="size"
                        labelWidth={0}
                        inputProps={{ 'aria-label': 'size' }}
                    >
                    <MenuItem value="">10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={30}>32</MenuItem>
                    <MenuItem value={30}>36</MenuItem>
                    <MenuItem value={30}>40</MenuItem>
                    </Select>
                </FormControl>
            </span>
            {/*<PropertyItem propertyicon={ictext}/>*/}
            <span className="separator"/>
            <PropertyItem propertyicon={icleft}/>
            <PropertyItem propertyicon={iccenter}/>
            <PropertyItem propertyicon={icright}/>
            <span className="separator"/>
            <span className="ui-propertybar-2">
                <PropertyItem propertyicon={ich}/>
                <PropertyItem propertyicon={icv}/>
                <PropertyItem propertyicon={icl}/>
                <PropertyItem propertyicon={icc}/>
                <PropertyItem propertyicon={icr}/>
                <PropertyItem propertyicon={ict}/>
                <PropertyItem propertyicon={icm}/>
                <PropertyItem propertyicon={icb}/>
            </span>
        </div>
    );
}

const PropertyItem = (props) => {
    return (
        <button className="ui-propertybar__item">
            <img className="ui-propertybar__item-icon" src={props.propertyicon} alt="Prestau"/>
        </button>
    )
};
