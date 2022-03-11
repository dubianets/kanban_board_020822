import {useState} from "react";
import {TextField, Button, SwipeableDrawer,Box, List,Divider} from "@mui/material";

function Drawer(props) {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [inputPriorety, setInputPriorety] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    const taskHandler = () => {
      props.addTask(inputTask,inputPriorety,inputDescription);
        setOpenDrawer(false);
    }

    const list = () => (
        <Box
            sx={{ width: 350}}
            role="presentation"
        >
            <List>
                <TextField
                    sx={{marginTop: 0.5, width: 330}}
                    required
                    id="filled-required"
                    label="New Task"
                    defaultValue=""
                    variant="filled"
                    onChange={(event) => {setInputTask(event.target.value)}}
                />
                <TextField
                    sx={{marginTop: 0.5, width: 330}}
                    required
                    id="filled-required"
                    label="Set Priorety"
                    defaultValue=""
                    variant="filled"
                    onChange={(event) => {setInputPriorety(event.target.value)}}
                />
                <TextField
                    sx={{marginTop: 0.5, width: 330}}
                    required
                    id="filled-required"
                    label="Description"
                    defaultValue=""
                    variant="filled"
                    onChange={(event) => {setInputDescription(event.target.value)}}
                />
            </List>
            <Divider />
            <Button
                onClick={taskHandler}
                sx={{background: 'lightblue', fontSize: '0.85rem', color:'#2e7d32', marginLeft: 25}} size="small">SAVE</Button>
            <Button
                onClick={() => {setOpenDrawer(false)}}
                sx={{fontSize: '0.85rem', color:'#2e7d32'}} size="small">cancel</Button>
        </Box>
    );

    return (
        <div>
                    <Button onClick={toggleDrawer(true)}>{'Edit task'}</Button>
                    <SwipeableDrawer
                        open={openDrawer}
                        onClose={toggleDrawer( false)}
                        onOpen={toggleDrawer( true)}
                    >
                        {list()}
                    </SwipeableDrawer>
        </div>
    );
}
export default Drawer;