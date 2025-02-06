import React from "react";
import BookCard from "./components/BookCard";
import Grid from '@mui/joy/Grid'

export default function BookList({books, updateBook, refresh}){
    return (
        <>
            <Grid container direction="row" spacing={3} sx={{width:'100%'}}>
                {books.map( (b) => {
                return (<Grid key = {b.id} item size={4}><BookCard book={{id:b.id, title:b.title, author:b.author, genre:b.genre}} updateBookFunc={updateBook} updateCallback={refresh}/></Grid>)
                })}
            </Grid>
        </> 
    )
}
