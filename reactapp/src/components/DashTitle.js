import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import  { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Title, Description, Label,Actions) {
    return { Title, Description, Label };
  }
  const rows = [
    createData("Designing",'I have to make VValidate mockups for signup and login page','today'),
    createData("Machine Learning","text to question generation using NLP techniques",'upcoming'),
    createData('learn MUI',"Learn to use MUI and create a web application using MUI",'pending'),
    createData('Eat a Cupcake', "Eat it soon",'pending'),
    createData('Prepare for Flipkart grid 5.0',"Organize a meeting with ur friends",'upcoming'),
  ];
  
  

const DashTitle = () => {
    const [open, setOpen] = React.useState(false);
    const[open2,setOpen2] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{'width':'1050px'}}>
     
    <div style={{ float: 'right','marginTop':'2%' }}>
    <NotificationsActiveIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SettingsIcon/>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<LogoutIcon/>&nbsp;&nbsp;&nbsp;
    </div>  <br/> 
    <div style={{'marginLeft':'5%','marginRight':'5%'}}>
      <h1>Dashboard</h1>
<br/>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleClickOpen}>
    <AddIcon style={{'color':'blue','fontSize':'28px'}}/></IconButton>
      <span style={{ marginLeft: '8px' }}>Add New Task</span>
      &nbsp;&nbsp;&nbsp; <div style={{"borderRadius": "25px",
"backgroundColor": "#F6F4F4",'height':'35px','width':'340px','marginLeft':'340px','display':'flex'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style={{'color':'#A1AEB7','marginTop':'3px'}}>Search specific task<div style={{'float':'right'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SearchIcon  style={{'color':'#A1AEB7','float':'right','marginRight':'8px','marginTop':'3px'}}/></div></div> </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{'color':'#bfafcf'}}>Add new task</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <p style={{'fontSize':'14px'}}>To edit an existing task, please enter the following details</p> 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="label"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
    <br/>
    <div >
    {/* style={{ width: '100%', 'borderRadius':'22px',border: '1px solid #76B7D4'}} */}
    <div style={{'borderRadius':'15px','margin':'1%',backgroundColor:'#F5F6F6'}}  >
      <Table sx={{ minWidth: 920}} style={{'borderRadius':'20px'}} aria-label="simple table">
        <TableHead style={{'borderRadius':'10px'}}>
          <TableRow >
            <StyledTableCell ><b>Task Title</b></StyledTableCell>
            <StyledTableCell align="left"><b>Description</b></StyledTableCell>
            <StyledTableCell align="center"><b>Label&nbsp;</b></StyledTableCell>
            <StyledTableCell align="center"><b>&nbsp;&nbsp;&nbsp;Actions&nbsp;</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.Title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
              {row.Title}
              </StyledTableCell>
              
              <StyledTableCell align="left">{row.Description}</StyledTableCell>
              <StyledTableCell align="center">{row.Label}</StyledTableCell>
              <StyledTableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IconButton><DeleteIcon style={{'color':'grey'}}/></IconButton> &nbsp;&nbsp;<IconButton onClick={handleClickOpen2}><EditIcon style={{'color':'grey'}}/></IconButton>&nbsp;&nbsp;</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <br/>
    </div>
    <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle style={{'color':'#afcfbf'}}>Edit existing task</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <p style={{'fontSize':'14px'}}>To add a new task, please enter the following details</p> 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="label"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleClose2}>Save</Button>
        </DialogActions>
      </Dialog>
    </div></div></div>
  )
}

export default DashTitle
