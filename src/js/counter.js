import {useSelector,useDispatch } from 'react-redux';
import {createStore} from 'redux';

const ADD="counter/ADD";
const UN="counter/UN";

export const add=()=>({type:ADD});
export const un=()=>({type:UN});

const initialState=[];

function counter(State=initialState, action) {
    switch(action.type){
        case ADD:
           return{

           }; 

        case UN:
           return{

           }; 
        default:
            return State;
        }
}

