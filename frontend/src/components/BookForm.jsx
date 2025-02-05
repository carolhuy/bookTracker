import { useState } from "react";
import {
    Input,  FormControl,  InputLabel,  FormHelperText, FormLabel, Stack,  Button,  TextField, Typography} from "@mui/material";

export default function BookForm( { existingBook = {}, updateCallback}){
    const [title,setTitle] = useState(existingBook.title || "")
    const [author,setAuthor] = useState(existingBook.author || "")
    const [genre,setGenre] = useState(existingBook.genre || "")

    const updating = Object.entries(existingBook).length!==0
    const onSubmit = async (e) =>{
        e.preventDefault()

        const data = {
            title, 
            author,
            genre
        }
        console.log('existingBook',existingBook)

        const url = "http://127.0.0.1:5000/" + (updating ? `update_book/${existingBook.id}`:"add_book")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status!=201 && response.status!=200){
            const result = await response.json()
            alert (result.message)
        }
        else{
            //successful request, close the modal and update the data 
            updateCallback()
        }
    }

    return (
    <form onSubmit={onSubmit}> 
        <Stack direction="column" spacing={2} sx={{marginLeft:'1rem', marginTop:'2rem', marginRight:'1rem'}}>
            <FormControl>
                <FormLabel htmlFor="title" sx={{color:'black'}}>Book Title</FormLabel>
                <Input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <FormHelperText id="title-text">
                Please enter the book title.
                </FormHelperText>
            </FormControl>
            
            <FormControl>
                <FormLabel htmlFor="author" sx={{color:'black'}}>Author's Name</FormLabel>
                <Input type="text" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                <FormHelperText id="author-text">
                Please enter the author's name.
                </FormHelperText>
            </FormControl>
                
            <FormControl>
                <FormLabel htmlFor="genre" sx={{color:'black'}}>Genre(s)</FormLabel>
                <Input type="text" id="genre" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
                <FormHelperText id="genre-text">
                Please enter the book genres.
                </FormHelperText>
            </FormControl>

            <Button type="submit">{updating ? "Update Book" : "Add Book"}</Button>
        </Stack>   
    </form>
    )
}