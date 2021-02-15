import {createStore, combineReducers} from 'redux'

// ADD_EXPENSE
// REMOVE EXPENSE
// EDIT_EXPENSE
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
        default:
            return state;
    }
};

//const store = createStore(expenseReducer);
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

console.log(store.getState())

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