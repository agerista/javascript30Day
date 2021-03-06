from jinja2 import StrictUndefined
from flask import Flask, jsonify, render_template, redirect, request, flash, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "D$<M$II@2Za30jsVC"

# Normally, if you use an undefined variable in Jinja2, it fails
# silently. This is horrible. Fix this so that, instead, it raises an
# error.
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def index():
    """homepage"""

    return render_template("index.html")

################################################################################
if __name__ == "__main__":

    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = False
    # make sure templates, etc. are not cached in debug mode
    app.jinja_env.auto_reload = app.debug

    # Use the DebugToolbar
    DebugToolbarExtension(app)
    app.run(port=5000, host='0.0.0.0')
