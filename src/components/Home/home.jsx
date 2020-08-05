import React, {Component} from "react";
import './home.scss'
import Toolbar from "../Ui/Toolbar/toolbar";
import Propertybar from "../Ui/Propertybar/propertybar";
import Window from "../Ui/Window/window";
import Options from "../Ui/Options/options";
import Frame from "../Ui/Frame/frame";
import ModalUpload from "../Ui/ModalUpload/ModalUpload";

export class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         active: true,
    //     };
    // }

    render() {
        return (
            <div className="ui-home">
                <div className="grid-container">
                    <div className="toolbar">
                        <Toolbar/>
                    </div>
                    <div className="propertybar">
                        <Propertybar/>
                    </div>
                    <div className="options">
                        <Options/>
                    </div>
                    <div className="window">
                        <Window/>
                    </div>
                    <div className="frame">
                        <Frame/>
                        <ModalUpload/>
                    </div>
                </div>
            </div>
        )
    }
}

