from flask import request, jsonify
from config import app, db
from models import Book

#API routes 
@app.route("/books",methods=["GET"])
def get_books():
    books = Book.query.all()
    json_books = list(map(lambda x: x.to_json(), books))
    return jsonify({"books":json_books})

@app.route("/add_book", methods=["POST"])
def add_book():
    title = request.json.get("title")
    author = request.json.get("author")
    genre = request.json.get("genre")

    if not title:
        return (jsonify({"message": "You must enter a title."}), 400)
    if not author:
        return (jsonify({"message": "You must enter an author's name."}), 400)
    if not genre:
        return (jsonify({"message": "You must enter at least one genre."}), 400)
    #also add warning fro double adding book
    
    new_book = Book(title=title, author=author, genre=genre)
    try:
        db.session.add(new_book)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}), 400 
    
    return jsonify({"message":"Book successfully added!"}), 201

@app.route("/update_book/<int:book_id>", methods=["PATCH"])
def update_book(book_id):
    book = Book.query.get(book_id)

    if not book:
        return jsonify({"message": "Book not found"}), 404
    
    data = request.json
    book.title = data.get("title", book.title)
    book.author = data.get("author", book.author)
    book.genre = data.get("genre", book.genre)

    db.session.commit()

    return jsonify({"message":"Book successfully updated!"}), 200

@app.route("/delete_book/<int:book_id>", methods=["DELETE"])
def delete_book(book_id):
    book = Book.query.get(book_id)

    if not book:
        return jsonify({"message":"Book not found, please try again."}), 404
    
    db.session.delete(book)
    db.session.commit()

    return jsonify({"message":"Book successfully deleted!"}), 200 


#run Flask application if we are in main, avoids running when main is imported 
if __name__ == "__main__":
    #instantize db
    with app.app_context():
        #create the models defined to spin up db 
        db.create_all()

    app.run(debug=True)

