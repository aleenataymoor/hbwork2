"""Server for movie ratings app."""
from flask import (Flask, render_template, request, flash, session,
                   redirect)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


app = Flask(__name__)


# Replace this with routes and view functions!
@app.route('/')
def homepage():

    return render_template('homepage.html')

@app.route('/movies')
def all_movies():

    movies = crud.get_all_movies()

    return render_template('all_movies.html', movies=movies)

if __name__ == "__main__":
    # DebugToolbarExtension(app)
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)