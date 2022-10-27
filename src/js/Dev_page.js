import DevFilter from './Dev_Filter';
import DevBookMark from'./DevBookMark';
import DevWrap from './Dev_wrap';


    function Dev_Page(){
        return( 
        <div>
            <DevFilter/>
            <DevBookMark/>
            <DevWrap/>
        </div>
        )
    };

export default Dev_Page;