**Book Tracker**

**Purpose**

I have a lot of books I want to read, and I want a place to store them all. I also want to be able to see the genre and author. Once I have finished it or don't want to read it anymore, I want to remove it from the list. 

**Functional Requirements**
- Users should be able to view all the books they want to read.
- Users should be able to add new books they want to read.
- Users should be able to remove books if they no longer want to read them/have read them
- Users should be able to modify the book information in case of spelling errors.

**Nonfunctional Requirements**

Currently at this stage, I am not expecting a large amount of users so scale is not something I am concerned about. I will be using a SQL database since currently the data is structured. 

Future modifications could include:
- searching by author name
- searching by genre(s)
- including an image of the book
- creating multiple lists of books
- recommending new books based on other books the user has selected 

**Entities**

Book
- book_id
- title
- author_name
- genre

**APIs**

GET /book_tracker
- returns a list of Book

POST /create_book
- request will include the title of the book, author name, and genre
- returns whether request is successful 

DELETE /remove_book/book_id
- deletes book from list if exists
- returns whether request is successful

POST /update_book/book_id
- request will include the information to be updated
- returns whether request is successful 

**Tech Stack**

The backend is using Python with Flask, specifically FLask SQLAlchemy to create a SQLite database. Postman will be used to test the APIs. 

The frontend is using Javascript with a React framework. 

**Design**

Here's the link to a basic wireframe I sketched out. I plan to use Material UI to create the Card component to display each book and overall styling. 

https://drive.google.com/file/d/1-4mRfWjXo5Mxj5_D708RPa45oHHP1FLi/view?usp=sharing

