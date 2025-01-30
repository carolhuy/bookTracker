import React from "react";
import BookCard from "./components/BookCard";
import Grid from '@mui/joy/Grid'

export default function BookList({books}){
    return (
        <>
            <Grid container direction="row" spacing={3} sx={{width:'100%'}}>
                {books.map( b => {
                return <Grid size={4}><BookCard key = {b.id} book={{title:b.title, author:b.author, genre:b.genre}}/></Grid>
                })}
            </Grid>
        </>
    )
}
