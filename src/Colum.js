import Grid from "@mui/material/Grid";
import Cards from "./Cards";

function Colum (props) {

    return (
            <Grid sx={{textAlign: 'center',
                fontFamily: 'fantasy',
                fontSize: 30,}} item xs={4}
                onDragOver={(event) => {props.onDragOver(event)}}
                  onDrop={(event) => {props.onDrop(event,props.colum.id)}}>
                {props.colum.title}
                {props.cards.filter(el => props.colum.status === el.status)
                    .sort((a,b) => {return a.priority - b.priority})
                    .map(el => <Cards
                        removeTask={props.removeTask}
                        key={el.id}
                        card={el}
                        onDragStart={props.onDragStart}/>)}
            </Grid>

    );
}
export default Colum;