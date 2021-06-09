import data from '../data';
import {TimeLineBg} from '../style'
import TimeLineList from './TimeLineList';
/* Here where the timeline content, and there is a map function to getting the data from data.js and pass them to TimeLineList */
function TimeLine(){
    return (
        <TimeLineBg>
            {data.map((dataText) => (<TimeLineList id={dataText.id} year={dataText.year} title={dataText.title} desc={dataText.desc} />))}
        </TimeLineBg>
    );
}

export default TimeLine;