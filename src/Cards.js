import {
    CardMedia, Card, CardContent, Typography, CardActions, Button,
    Box, SpeedDial, SpeedDialIcon, SpeedDialAction, CardHeader,
} from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Cards (props) {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <ArrowDownwardIcon/>, name: 'Down priorety' },
        { icon: <ArrowUpwardIcon/>, name: 'Up priorety' }
    ];


    const styleHeader = [
        {background: '#e53935', status: 'todo'},
        {background: '#90caf9', status: 'progress'},
        {background: '#ffee58', status: 'review'},
        {background: '#66bb6a', status: 'done'}
    ]


    const newStyleHeader = styleHeader.filter(el => el.status === props.card.status);
    let style ={background : newStyleHeader[0].background};


    return (
    <Card sx={{ maxWidth: 320, margin: '10px' }} draggable='true' onDragStart={(event) => {props.onDragStart( event,props.card.id)}}>
        <CardHeader
            style={style}
            title={props.card.title}
        />
        <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {props.card.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button
                onClick={(() => props.removeTask(props.card.id))}
                sx={{fontSize: '0.85rem', color:'#f44336'}} size="small">remove</Button>
            <Box sx={{ height: 80, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 20, right: 8}}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </CardActions>
    </Card>
    );
}
export default Cards;