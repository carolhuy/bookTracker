from config import db

#database model represented as Python class
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    author = db.Column(db.String(120), unique=False, nullable=False)
    genre = db.Column(db.String(80), unique=False, nullable=False)

    def to_json(self):
        return{
            "id":self.id,
            "title":self.title,
            "author":self.author,
            "genre":self.genre
        }