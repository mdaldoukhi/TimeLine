import {MainList, Contents, Line} from '../style'
/* Getting data from data file and return how it looks in the TimeLine file */
function TimeLineList(props) {
    return (
        <MainList key={props.id}>
        <Contents>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>  
        </Contents>
        <Line><span>{props.year}</span></Line>
        </MainList>
    )};   


export default TimeLineList;

