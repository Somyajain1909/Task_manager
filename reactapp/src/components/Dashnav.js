import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TodayIcon from '@mui/icons-material/Today';
import PendingIcon from '@mui/icons-material/Pending';
import DeleteIcon from '@mui/icons-material/Delete';


const Dashnav = () => {
    
    return (
        <div style={{'width':'200px','color':'#000','backgroundColor':"#F5F6F6",'height':'580px',"overflowY":'hidden'}}>
            <br/>
     
            
        <List className="sticky-navbar">
          <ListItem  button>
          &nbsp;&nbsp;   <FormatListBulletedIcon style={{ fontSize: '18px', color: 'blue' }}/> &nbsp;&nbsp;
            <ListItemText primary="All tasks" />
          </ListItem>
          <br/>
          <ListItem button>
          &nbsp;&nbsp;<TodayIcon  style={{ fontSize: '18px', color: 'green' }}/>  &nbsp;&nbsp;
            <ListItemText primary="Today" />
          </ListItem>
          <ListItem button>
          &nbsp;&nbsp;<UpcomingIcon  style={{ fontSize: '18px', color: 'purple' }}/>  &nbsp;&nbsp;
            <ListItemText primary="Upcoming" />
          </ListItem>
          <ListItem button>
          &nbsp;&nbsp;<PendingIcon  style={{ fontSize: '18px', color: 'red' }}/>  &nbsp;&nbsp;
            <ListItemText primary="Pending" />
          </ListItem>
          <br/>
          <ListItem button>
          &nbsp;&nbsp;<DeleteIcon style={{ fontSize: '18px', color: 'grey' }}/>  &nbsp;&nbsp;
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
        </div>
      );
}

export default Dashnav
