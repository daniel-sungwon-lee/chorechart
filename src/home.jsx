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
    },
    headerRow: {
        fontSize: "18px",
        color: "white"
    }
})

const createRow = (chore, name, name2, name3, name4, name5, name6, name7) => {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{chore}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{name2}</TableCell>
            <TableCell align="center">{name3}</TableCell>
            <TableCell align="center">{name4}</TableCell>
            <TableCell align="center">{name5}</TableCell>
            <TableCell align="center">{name6}</TableCell>
            <TableCell align="center">{name7}</TableCell>
        </TableRow>
    )
}

export default function Home (props) {
    const header = React.createRef();
    const table = React.createRef();
    const classes = useStyles();
    
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
                            <TableCell align="left" className={classes.headerRow}>Chore</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Sunday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Monday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Tuesday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Wednesday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Thursday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Friday</TableCell>
                            <TableCell align="center" className={classes.headerRow}>Saturday</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            createRow(
                                "Vaccum", "Daniel", "Joanne", "Moses", "Esther", "Daniel", "Joanne", "Moses"
                            )
                        }
                        {
                            createRow(
                                "Bathroom", "Joanne", "Moses", "Esther", "Daniel", "Joanne", "Moses", "Esther"
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}