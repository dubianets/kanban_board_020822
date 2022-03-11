import {nanoid} from "nanoid";
import Colum from "./Colum";
import {useState} from "react";
import {Grid} from "@mui/material";
import Drawer from "./Drawer";

const colum = [
    {id: nanoid(), title: 'To do', status: 'todo'},
    {id: nanoid(), title: 'In progress', status: 'progress'},
    {id: nanoid(), title: 'Review', status: 'review'},
    {id: nanoid(), title: 'Done', status: 'done'},
]

//const initCard = Array(4).fill({id: nanoid(), title: '', status: 'todo', priorety: 1})
const initCard = [
    {id: nanoid(), title: 'Learn JS', status: 'done', description: '', priorety: 5},
    {id: nanoid(), title: 'Learn CSS', status: 'done', priorety: 1},
    {id: nanoid(), title: 'Learn HTML', status: 'review', priorety: 1},
    {id: nanoid(), title: 'Learn React', status: 'progress', priorety: 7},
    {id: nanoid(), title: 'Learn JAWA', status: 'todo', priorety: 3}
]
function App() {
    
    const [cards, setCards] = useState(initCard);
    const [holdCard, setHoldCard] = useState([]);

    const addTask = (inputTask,inputPriorety,inputDescription) => {
        setCards([...cards,{
            id: nanoid(),
            title: inputTask,
            status:'todo',
            description: inputDescription,
            priorety: inputPriorety
        }])
    };

    const removeTask = (id) => {
       const newCards = cards.filter(el => el.id !== id)
        setCards(newCards);

    }
    
    function onDragStart  (event, id) {
        const newHoldCard = cards.filter(el => el.id === id);
        setHoldCard(newHoldCard);
    }

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const onDrop = (event,id) => {
        const dropColum = colum.filter(el => el.id === id);
        const newCards = cards.map(el => el.id === holdCard[0].id ? ({...el,status: dropColum[0].status}) : el);
        setCards(newCards);
    }

    return (
        <div>
            <Drawer addTask={addTask}/>
            <Grid container spacing={4} columns={16}>
            {colum.map(colum => <Colum
                removeTask={removeTask}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragStart={onDragStart}
                colum={colum}
                cards={cards}
                key={colum.id}/>)}
            </Grid>
        </div>
    );
}

export default App;
