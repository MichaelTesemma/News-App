#This is a very basic flask api that uses a database

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__) #initialize the app
db = SQLAlchemy(app) #initialize the database

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3' #Pointing to the database

class user(db.Model): #creating the databese's table model
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True)
    location = db.Column(db.String(20))
    date = db.Column(db.DateTime, default=datetime.now)

    #from app import db  #importing the database data from app in the python shell
    #db.create_all()  #creating the database file
    


@app.route('/')
def home():
    return("<h1>This is Home</h1>")

@app.route('/<name>/<location>')
def rest(name, location):
    User = user(name=name, location=location) #initializing the user class or table
    db.session.add(User) #preparing to add the url data to database
    db.session.commit() #inserting data to the table
    return f'your name is {name} and location is {location}'

@app.route('/<name>')
def get_user(name):
    User = user.query.filter_by(name=name).first() #querying the database using the url parameters
    return f'The {name} is located in: {User.location} {User.id} {User.date}'

if __name__ == "__main__": 
    app.run(debug=True)