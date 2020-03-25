// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
// import CancelIcon from '@material-ui/icons/Cancel';

// const useStyles = makeStyles({
//   table: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'red',
//     height: 28,
//     padding: '0 20px',
//   },
// })

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     color: theme.palette.common.black,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// function createData(fileName, fileType, size, scanTimeInMilliSec,virusStatus, error, hash, cdate) {
//   return { fileName, fileType, size, scanTimeInMilliSec,virusStatus, error , hash, cdate};
// }

// export default function SimpleTable(props) {
//   const classes = useStyles();

//   const data = props.data;

//   const rows = data.map((element)=>{
//     let virusStatus = typeof element.virusFree != 'undefined' ? (element.virusFree.toString() === 'true' ? <VerifiedUserIcon style={{ "color": "green" }} /> :  <CancelIcon style={{ "color": "red" }} />) : 'NA';
//     let error = typeof element.errorMessage != 'undefined' ? element.errorMessage : 'NA'
//     let cdate = (new Date(element.uploadTime).toUTCString()).toString();
//     return createData(element.fileName,element.fileType,element.size,element.scanTimeInMilliSec,virusStatus, error, element.hash, cdate)
//   });

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table" size="small">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>File Name</StyledTableCell>
//             <StyledTableCell>Upload Time(GMT)</StyledTableCell>
//             <StyledTableCell>File Hash</StyledTableCell>
//             <StyledTableCell align="left">File Type</StyledTableCell>
//             <StyledTableCell align="left">File Size&nbsp;(bytes)</StyledTableCell>
//             <StyledTableCell align="left">ClamAV Scan Time&nbsp;(ms)</StyledTableCell>
//             <StyledTableCell align="left">Scan Status</StyledTableCell>
//             <StyledTableCell align="left">Errors</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.fileName + row.scanTimeInMilliSec + row.cdate}>
//               <TableCell align="left">{row.fileName}</TableCell>
//               <TableCell align="left">{row.cdate}</TableCell>
//               <TableCell align="left">{row.hash}</TableCell>
//               <TableCell align="left">{row.fileType}</TableCell>
//               <TableCell align="left">{row.size}</TableCell>
//               <TableCell align="left">{row.scanTimeInMilliSec}</TableCell>
//               <TableCell align="left">{row.virusStatus}</TableCell>
//               <TableCell align="left">{row.error}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
