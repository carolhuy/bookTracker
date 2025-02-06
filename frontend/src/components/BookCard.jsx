import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent'
import CardActions from '@mui/joy/CardActions';
import Button from '@mui/joy/Button';

export default function BookCard({book, updateBookFunc, updateCallback}){
const onDelete = async (id) => {
    try{
        const options = {
            method:"DELETE"
        }
        const response = await fetch(`http://127.0.0.1:5000/delete_book/${id}`, options)
        if (response.status===200){
            updateCallback()
        }
        else{
            console.error("Failed to delete")
        }
    }
    catch (error){
        alert(error)
    }
}

    return (
    <>
        <Card>
            <CardContent/>
            <CardContent>
                <h2>Title: {book.title}</h2>
                <h2>Author: {book.author}</h2>
                <h2>Genre: {book.genre}</h2>
            </CardContent>

            <CardActions>
                <Button variant="outlined" color="neutral" onClick={()=>updateBookFunc(book)}>
                Update
                </Button>
                <Button variant="solid" color="primary" onClick={()=> onDelete(book.id)}>
                Delete
                </Button>
            </CardActions>
        </Card>
    </>
    )
    
}