import Dev_wrap from '../Dev_wrap'
import {useDispatch,useSelector} from 'react-redux';
import {add,un} from '../../modules/counter';

function CounterContainer(){
    const number=useSelector(state=>state.counter);
    const dispatch=useDispatch();

    const onAdd=()=>{
        dispatch(add());
        alert("북마크됨")
    };
    const onUn=()=>{
        dispatch(un());
    };

    return(
        <Dev_wrap number={number} onAdd={onAdd} onUn={onUn}/>
    );
}
export default CounterContainer;