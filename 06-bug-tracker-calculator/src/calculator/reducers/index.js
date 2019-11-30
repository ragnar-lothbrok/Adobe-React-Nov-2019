function calcualtorReducer(currentState = 0, action){
    if (action.type === 'ADD') return currentState = action.payload['num1'] + action.payload['num2'];
    if (action.type === 'SUB') return currentState = action.payload['num1'] - action.payload['num2'];
    if (action.type === 'DIV') return currentState = action.payload['num1'] / action.payload['num2'];
    if (action.type === 'MUL') return currentState = action.payload['num1'] * action.payload['num2'];
    return currentState;
}

export default calcualtorReducer;