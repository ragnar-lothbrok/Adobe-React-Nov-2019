import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileUpload from './views/fileupload';
import * as bugActionCreators from './actions';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

class BugTracker extends Component {

    render() {
        const back = "163986191-adobe-wallpapers.jpg";
        // const back = "images.jpg";
        const imagetest = "url(" + back + ")";
        console.log(imagetest);
        const { bugs, addNew, toggle, removeClosed, load } = this.props;
        return (
            <div style={{
                "textAlign": "center", "position": "absolute",
                "height": "100%",
                "width": "100%",
                "backgroundImage": imagetest,
                "backgroundSize": "100% 100%"
            }}>
                <Typography variant="h2" component="h3">
                    File Virus Scanner UI
                </Typography>

                <hr />
                <FileUpload />
            </div>
        )
    }
}

//extracting state for the component
function mapStateToProps(storeState) {
    //let bugsState = storeState.bugsState.filter(bug => bug.id % 2 === storeState.spinnerState % 2);
    let bugsState = storeState.bugsState;
    return { bugs: bugsState };
}

//creating action dispatchers for the component
function mapDispatchToProps(dispatch) {
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);