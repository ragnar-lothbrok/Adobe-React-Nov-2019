//let currentBugId = 0;
import { save } from '../services/bugApi';

export function addNew(newBugName){
    const newBugData = { 
        id : 0, 
        name : newBugName, 
        isClosed : false, 
        createdAt : new Date()
    };
    return save(newBugData)
        .then(newBug => {
            const action = {
                type: 'ADD_NEW_BUG',
                payload: newBug
            };
            return action;
        });
}