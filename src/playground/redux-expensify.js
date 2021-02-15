import {createStore, combineReducers} from 'redux'
import uuid from 'uuid';

// ADD_EXPENSE -->ACTION
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}={}) =>({
    type : "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
    
});

// REMOVE EXPENSE
const deleteExpense = ({id = ''}={}) => ({
    type: "DELETE_EXPENSE",
        id
});

// EDIT_EXPENSE
const editExpense = (id, updates) =>({
    type: "EDIT_EXPENSE", 
    id,
    updates
});
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


//Filter Reducer
const filterDefaultReducer = {
    text: '',
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
}
const filterReducer = (state = filterDefaultReducer, action) =>{
    switch(action.type){
        default:
            return state;
    }
};

//Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [...state, action.expense]; // This is spread fn which is just like contact. 
            //It simply means, get all the values from prev state[] and add/concat action.expense to it w/o effecting the orginal array.
        case 'DELETE_EXPENSE':
            return state.filter(({id})=>{ //if filter fn returns true, item will be kept in array else will be removed.(id is destructured and is written instead of expense.id)
                return id !== action.id;
            })
        case 'EDIT_EXPENSE':
            console.log('edit expense')
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense, //This is spread opearator for object similar to spread op for array
                        ...action.updates
                    };
                }
                else{ return expense;}
            });

        default:
            return state;
    }
};

//Create Store
//const store = createStore(expenseReducer);
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

store.subscribe(()=>{
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 700}));

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 2}));

//store.dispatch(deleteExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(expenseOne.expense.id, {description:'Rent for Jan', amount:820}))

const demoState = {
    expenses: [{
        id: 'sdfvkiub',
        description: 'Jan rent',
        note: 'Final payment for January to Aaquib',
        amount: 5640,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: "Saim",
//     age:27
// }
// console.log({
//     ...user,
//     location: "Waterloo",
//     PhnNo: 12345,
//     name: "Saim Ahmad",
//     age: 26
// })