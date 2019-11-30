import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

export var calculatorActionCreators = {
    add(num1, num2){
        let action = { type : 'ADD', payload : {'num1': num1, 'num2': num2} };
        return action;
    },
    sub(num1, num2){
        let action = { type : 'SUB', payload : {'num1': num1, 'num2': num2} };
        return action;
    },
    div(num1, num2){
        let action = { type : 'DIV', payload : {'num1': num1, 'num2': num2} };
        return action;
    },
    mul(num1, num2){
        let action = { type : 'MUL', payload : {'num1': num1, 'num2': num2} };
        return action;
    }
}

class Calculator extends React.Component{
    state = {
        num1 : 0,
        num2 : 0
    };
    render = () => {
        let { stateValue, add, sub, div, mul } = this.props,
            { num1, num2 } = this.state;
        return (
            <div>
                <h1>Calculator</h1>
                <hr/>
                <label htmlFor="">Delta :</label>
                <input type="number" onChange={ evt => this.setState({ num1 : evt.target.valueAsNumber })} />
                <input type="number" onChange={ evt => this.setState({ num2 : evt.target.valueAsNumber })} />
                <label> Result : {stateValue}</label>
                <br/>
                <input type="button" value="Add" onClick={() => add(num1, num2)} />
                <input type="button" value="Subtract" onClick={() => sub(num1, num2)} />
                <input type="button" value="Divide" onClick={() => div(num1, num2)} />
                <input type="button" value="Multiply" onClick={() => mul(num1, num2)} />
            </div>
        );
    }
}

function mapStateToProps(storeState){
    const stateValue = storeState.calculatorState;
    return { stateValue : stateValue };
}

function mapDispatchToProps(dispatch){
    const calculatorActionDispatchers = bindActionCreators(calculatorActionCreators, dispatch);
    return calculatorActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);