import React from "react";
import BookCard from "./components/BookCard";
import Grid from '@mui/joy/Grid'

export default function BookList({books}){
    return (
        <>
            <h1>Books</h1>
            <Grid container direction="row" sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 180,
            }}>
                {books.map( b => {
                return <BookCard key = {b.id} book={{title:b.title, author:b.author, genre:b.genre}}/>
                })}
            </Grid>
        </>
    )
}
