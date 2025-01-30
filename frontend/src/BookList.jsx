import React from "react";
import BookCard from "./components/BookCard";
import Grid from '@mui/joy/Grid'
import Button from '@mui/joy/Button';

export default function BookList({books}){
    return (
        <>
            <h1>Books</h1>
            <Button>+ Add Book</Button>
            <Grid container direction="row" spacing={3}>
                {books.map( b => {
                return <Grid size={12}><BookCard key = {b.id} book={{title:b.title, author:b.author, genre:b.genre}}/></Grid>
                })}
            </Grid>
        </>
    )
}
