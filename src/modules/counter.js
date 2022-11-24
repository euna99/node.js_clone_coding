const ADD="counter/ADD";
const UN="counter/UN";

export const add=(id)=>({type:ADD,id});
export const un=(id)=>({type:UN,id});

const initialState=[];

function counter(state=initialState, action) {
    switch(action.type){
        case ADD:
           return (state=[...state,action.id]);
        //    alert("북마크됨");

        case UN:
           return{

           }; 
        default:
            return state;
        }
}

export default counter;