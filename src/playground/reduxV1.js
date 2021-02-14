import {createStore} from "redux";

/*
Action generator - fn that return fn object. Instead of creating 2 action objects just for increment.
This action generators are preferred over inline objects as we can avoid typos which are not detected
as errors.
For INCREMENT we will see multipple level reform, making it more shorthand and precise.
*/
//Reform 1:
// const incrementCount = () => {
//     return{
//         type: "INCREMENT"
//     };
//};  
/*This can be re-written as it is return one single object.
 Reform 2:*/
// const incrementCount = (payload = {}) => ({
//     type: "INCREMENT",
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1  
// })
/*Now will take payload and make it an object and perform object destructuring on it.Payload has value of incrementBy in it.
Since we can now use incrementBy indivisually instead of payload.incrementBy
Reform 3: */
// const incrementCount = ({incrementBy} = {}) => ({
//     type: "INCREMENT",
//     incrementBy: typeof incrementBy === 'number' ? payload.incrementBy : 1  
// })

/*Now we also know we can perform default value for destructured object which means if destructured object is not present use 1
which eventually leads to removal of check on 3rd line... so it will be incrementBy : incrementBy....which can ultimately be written as below.
Reform 4:  */
const incrementCount = ({incrementBy =1} = {}) => ({
    type: "INCREMENT",
    incrementBy
})

const decrementCount = ({decrementBy =1} = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const resetCount = () => ({
    type: "RESET"
})

const setCount = ({setTo =-99} = {}) => ({
    type: "SET",
    setTo : setTo
})

/*REDUCERS
1. Reducers are pure function i.e. o/p is only determined by i/p and does not change anything outside the fn of the scope.
2. Never change state or action
*/
const countReducer = (state = {count:10}, action) => {
    switch(action.type){
        case "INCREMENT": 
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1
            return{
                count: state.count+ action.incrementBy
            }
        case "DECREMENT":
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1
            return{
                count:state.count-action.decrementBy
            }
        case "SET":
            //const setTo = typeof action.setTo === 'number' ? action.setTo : -99
            return{
                count:action.setTo
            }                
        case "RESET":
            return{
                count:0
            }        
        default:
            return state;    
    }
}

const store = createStore( countReducer)

//this is called every time there is a change in store (not called to print def values).
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(
    decrementCount({decrementBy:5})
);

store.dispatch(
    decrementCount()
);

//this will stop calling the sunscribe fn everytime store changes.
//unsubscribe();

store.dispatch(resetCount());


// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(
    incrementCount({incrementBy:5})
)

store.dispatch(incrementCount());

store.dispatch(
    setCount({setTo:55})
);