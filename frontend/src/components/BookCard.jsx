import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent'
import CardActions from '@mui/joy/CardActions';
import Button from '@mui/joy/Button';

export default function BookCard({book, updateBookFunc}){
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
                <Button variant="solid" color="primary">
                Delete
                </Button>
            </CardActions>
        </Card>
    </>
    )
    
}