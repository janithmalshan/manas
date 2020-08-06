import React, {ReactPropTypes as PropTypes} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './options.scss'
import icon from "../../../assets/ic-expand.svg";
import plus from "../../../assets/ic-panel-plus.svg";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { SketchPicker } from 'react-color';

class Component extends React.Component {

    render() {
        return <SketchPicker />;
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        padding: '6px 0 0',
        width: 44,
        height: 44,
        boxSizing: 'border-box',
        position: 'absolute',
        top: 10,
        left: 24,
        zIndex: 99,
    },
}));

export default function Options() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState('panel3');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="ui-option">
            <IconButton className={classes.root} component="a">
                <img src={icon} alt="back"/>
            </IconButton>
            <div className="ui-option__tabs">
                <Tabs value={value} onChange={handleChangeTab} aria-label="simple tabs example">
                    <Tab label="Settings"/>
                    <Tab label="Objects"/>
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <div>
                    <MuiAccordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">Fills</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">Stroke</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">Color</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <div className="ui-option__panel-picker">
                                <ColorPick />
                            </div>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">Opacity</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">X</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                    <MuiAccordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation={0}>
                        <MuiAccordionSummary aria-controls="panel6d-content" id="panel6d-header" expandIcon={<img src={plus}/>}>
                            <label className="ui-option__panel-text">Y</label>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
               Objects
            </TabPanel>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="ui-option__panel"
        >
            {value === index && (
                <div>
                    <h2>{children}</h2>
                </div>
            )}
        </div>
    );
}

const ColorPick = () => {
    return (
        <ChromePicker />
    )
}
