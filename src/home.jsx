import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Table, TableBody, TableCell, TableContainer, TableHead,
         TableRow, Paper } from '@material-ui/core';  
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    table: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: "80%",
        opacity: "0",
    }
})

export default function Home (props) {
    const header = React.createRef();
    const table = React.createRef();
    const classes = useStyles();
    const [rows, setRows] = useState([])
    
    useEffect(() => {
        gsap.to(header.current, {color: "#7fabfc", duration: 1.5, scale: 1.1, y: "2rem"})
        gsap.to(table.current, { duration: 2, scale: 1.05, rotate: 360, backgroundColor: "#eb77b7", opacity: 1 })

    }, [header, table])

    return (
        <div className="container" style={{paddingBottom: "6rem"}}>
            <h1 ref={header}>Chore Chart</h1>
            
            <TableContainer component={Paper} className={classes.table} ref={table}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Chore</TableCell>
                            <TableCell align="center">Sunday</TableCell>
                            <TableCell align="center">Monday</TableCell>
                            <TableCell align="center">Tuesday</TableCell>
                            <TableCell align="center">Wednesday</TableCell>
                            <TableCell align="center">Thursday</TableCell>
                            <TableCell align="center">Friday</TableCell>
                            <TableCell align="center">Saturday</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}