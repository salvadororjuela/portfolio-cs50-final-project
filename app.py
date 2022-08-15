import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import login_required

from datetime import datetime

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Used to enable users to send mails from the form in contacto.html
app.secret_key = "secretKey"


# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response





# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

""" Configure the library to use SQLite database """
db = SQL("sqlite:///dbusers.db")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/acerca")
def acerca():
    return render_template("acerca.html")

@app.route("/colecciones")
def colecciones():
    return render_template("colecciones.html")

@app.route("/joyas")
def joyas():
    return render_template("joyas.html")

@app.route("/contacto", methods=["GET", "POST"])
def contacto():
    return render_template("contacto.html")

@app.route("/1colfiesta")
def colfiesta():
    return render_template("1colfiesta.html")

@app.route("/2fiestaotono")
def fiestaotono():
    return render_template("2fiestaotono.html")

@app.route("/anillos")
def anillos():
    return render_template("anillos.html")

@app.route("/aretes")
def aretes():
    return render_template("aretes.html")

@app.route("/brazaletes")
def brazaletes():
    return render_template("brazaletes.html")

@app.route("/collares")
def collares():
    return render_template("collares.html")

@app.route("/preguntas")
def preguntas():
    return render_template("preguntas.html")

@app.route("/suscribir", methods=["GET", "POST"])
def suscribir():
    """ Register User """

    # User reached via POST
    if request.method == "POST":

        # Generate a hashed password from the user's input information
        hashed = generate_password_hash(request.form.get("password"))

        # Assing the remaining varibles to fill in dbusers.db
        nombres = request.form.get("nombres")
        apellidos = request.form.get("apellidos")
        direnvio = request.form.get("direnvio")
        ciudadenvio = request.form.get("ciudadenvio")
        dirfacturacion = request.form.get("dirfacturacion")
        ciudadfacturacion = request.form.get("ciudadFacturacion")
        paiscorrespondencia = request.form.get("paiscorrespondencia")
        correo = request.form.get("correo")
        codpais = request.form.get("codpais")
        telefono = request.form.get("telefono")
        newsletter = request.form.get("newsletter")

        if newsletter != None:
            newsletter = "SI"
        else:
            newsletter = "NO"

        # Introduce information into dbusers.db (usuario is determined as a UNIQUE constraint field users table in dbusers.db)
        try:
            informacion = db.execute("INSERT INTO users (usuario, nombres, apellidos, direnvio, ciudadenvio, dirfacturacion, ciudadfacturacion, paiscorrespondencia, correo, hash, codpais, telefono, newsletter) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                       correo, nombres, apellidos, direnvio, ciudadenvio, dirfacturacion, ciudadfacturacion, paiscorrespondencia, correo, hashed, codpais, telefono, newsletter)

        # If the email account is already registered
        except:
            flash("Cuenta de Correo ya Registrada")
            return redirect("/suscribir")

        #Start session
        rows = db.execute("SELECT * FROM users WHERE usuario = ?", correo)

        #Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        flash("Registrado con éxio!")
        return redirect("/")

    else:
        return render_template("suscribir.html")

@app.route("/login", methods=["GET", "POST"])
def login():

    # Forget any opened session
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE usuario = ?", request.form.get("usuario"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            # To use flash over the same page after incorrect user or password input it is necessary use render_template
            flash("Usuario o Contraseña Invalidos")
            return render_template("login.html")

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]
        session["usuario"] = rows[0]["usuario"]
        usuario = session["usuario"]

        # Redirect user to home page
        flash("Sesión Iniciada Como " + usuario)
        return render_template("index.html", usuario=usuario)

    else:
        return render_template("login.html")

@app.route("/tobilleras")
def tobilleras():
    return render_template("tobilleras.html")

@app.route("/topos")
def topos():
    return render_template("topos.html")

@app.route("/compras", methods=["GET", "POST"])
# Requires log in to access
@login_required
def compras():

    return render_template("compras.html")

@app.route("/micuenta", methods=["GET", "POST"])
# Requieres log in to access
@login_required
def micuenta():

    # Variable to store the information to show
    datos = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])

    # Variables to display on micuenta.html
    nombres = datos[0]["nombres"]
    apellidos = datos[0]["apellidos"]
    direnvio = datos[0]["direnvio"]
    ciudadenvio = datos[0]["ciudadenvio"]
    dirfacturacion = datos[0]["dirfacturacion"]
    ciudadfacturacion = datos[0]["ciudadfacturacion"]
    paiscorrespondencia = datos[0]["paiscorrespondencia"]
    correo = datos[0]["correo"]
    codpais = datos[0]["codpais"]
    telefono = datos[0]["telefono"]
    newsletter = datos[0]["newsletter"]

    # Reached via GET
    if request.method == "GET":
        return render_template("micuenta.html", nombres=nombres, apellidos=apellidos, direnvio=direnvio, ciudadenvio=ciudadenvio, dirfacturacion=dirfacturacion,
        ciudadfacturacion=ciudadfacturacion, paiscorrespondencia=paiscorrespondencia, correo=correo, codpais=codpais, telefono=telefono, newsletter=newsletter)

    # Reached via POST
    else:

        # Change user's Nombres
        if request.form.get("nombres"):
            nombres = request.form.get("nombres")
            db.execute("UPDATE users SET nombres = :nombres WHERE id = :id", nombres=nombres, id=session["user_id"])
            flash("Nombres Cambiados con Éxito!")
            return redirect("/micuenta")

        # Change user's Apellidos
        if request.form.get("apellidos"):
            apellidos = request.form.get("apellidos")
            db.execute("UPDATE users SET apellidos = :apellidos WHERE id = :id", apellidos=apellidos, id=session["user_id"])
            flash("Apellidos Cambiados con Éxito!")
            return redirect("/micuenta")

        # Change user's Direccion Envio
        if request.form.get("direnvio"):
            direnvio = request.form.get("direnvio")
            db.execute("UPDATE users SET direnvio = :direnvio WHERE id = :id", direnvio=direnvio, id=session["user_id"])
            flash("Dirección de Envío Cambiada con Éxito!")
            return redirect("/micuenta")

        # Change user's Direccion Envío
        if request.form.get("ciudadenvio"):
            ciudadenvio = request.form.get("ciudadenvio")
            db.execute("UPDATE users SET ciudadenvio = :ciudadenvio WHERE id = :id", ciudadenvio=ciudadenvio, id=session["user_id"])
            flash("Ciudad de Envío Cambiada con Éxito!")
            return redirect("/micuenta")

        # Change user's Direccion Facturación
        if request.form.get("dirfacturacion"):
            dirfacturacion = request.form.get("dirfacturacion")
            db.execute("UPDATE users SET dirfacturacion = :dirfacturacion WHERE id = :id", dirfacturacion=dirfacturacion, id=session["user_id"])
            flash("Dirección de Facturación Cambiada con Éxito!")
            return redirect("/micuenta")

        # Change user's Ciudad Facturación
        if request.form.get("ciudadFacturacion"):
            ciudadFacturacion = request.form.get("ciudadFacturacion")
            db.execute("UPDATE users SET ciudadFacturacion = :ciudadFacturacion WHERE id = :id", ciudadFacturacion=ciudadFacturacion, id=session["user_id"])
            flash("Ciudad de Facturación Cambiada con Éxito!")
            return redirect("/micuenta")

        # Change user's País de Correspondencia
        if request.form.get("paiscorrespondencia"):
            paiscorrespondencia = request.form.get("paiscorrespondencia")
            db.execute("UPDATE users SET paiscorrespondencia = :paiscorrespondencia WHERE id = :id", paiscorrespondencia=paiscorrespondencia, id=session["user_id"])
            flash("País de Correspondencia Cambiado con Éxito!")
            return redirect("/micuenta")

        # Change user's Correo
        if request.form.get("correo"):
            correo = request.form.get("correo")
            usuario = request.form.get("correo")
            db.execute("UPDATE users SET usuario = :usuario, correo = :correo WHERE id = :id", usuario=usuario, correo=correo, id=session["user_id"])
            flash("Correo Electrónico Cambiado con Éxito!")
            return redirect("/micuenta")

        # Change user's Phone Country Code
        if request.form.get("codpais"):
            codpais = request.form.get("codpais")
            db.execute("UPDATE users SET codpais = :codpais WHERE id = :id", codpais=codpais, id=session["user_id"])

        # Change user's Teléfono
        if request.form.get("telefono"):
            telefono = request.form.get("telefono")
            db.execute("UPDATE users SET telefono = :telefono WHERE id = :id", telefono=telefono, id=session["user_id"])
            flash("Número Telefónico Cambiado con Éxito!")
            return redirect("/micuenta")

        # Change user's newsletter status
        if request.form.get("newsletter") or request.form.get("newsletterno"):
            newsletter = request.form.get("newsletter")
            newsletterno = request.form.get("newsletterno")

            # Converts the checmark in SI if selected and viceversa
            if newsletter != None:
                newsletter = "SI"

            if newsletterno != None:
                newsletter = "NO"

            db.execute("UPDATE users SET newsletter = :newsletter WHERE id = :id", newsletter=newsletter, id=session["user_id"])
            flash("Estado de Recepción de Noticias Cambiado con Éxito!")
            return redirect("/micuenta")

        # Change user's password
        # Generate a hashed password from the user's input information
        if request.form.get("password"):
            hashed = generate_password_hash(request.form.get("password"))
            db.execute("UPDATE users SET hash = :hashed WHERE id = :id", hashed=hashed, id=session["user_id"])
            flash("Contraseña Actualizada con Éxito!")
            return redirect("/micuenta")

        # Delete user's account
        if request.form.get("delete"):
            db.execute("DELETE FROM users WHERE id = :id", id=session["user_id"])
            session.clear()
            flash("Cuenta Eliminada Definitivamente!")
            return redirect("/")

        return render_template("micuenta.html", nombres=nombres, apellidos=apellidos, direnvio=direnvio, ciudadenvio=ciudadenvio, dirfacturacion=dirfacturacion,
        ciudadfacturacion=ciudadfacturacion, paiscorrespondencia=paiscorrespondencia, correo=correo, codpais=codpais, telefono=telefono, newsletter=newsletter)

@app.route("/gracias")
def gracias():
    return render_template("gracias.html")

@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id from session
    session.clear()

    # Redirect user to login form
    return redirect("/login")