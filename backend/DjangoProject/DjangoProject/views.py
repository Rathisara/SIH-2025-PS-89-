import mysql.connector as sqltor
import regex as re
from Demos.win32ts_logoff_disconnected import username
from rest_framework.response import Response
from rest_framework.decorators import api_view
conn = sqltor.connect(host="localhost",user="root",passwd="Jaga@2006",database="Sih2025")
cursor=conn.cursor(dictionary=True)
def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if re.match(pattern, email):
        return True
    return False
@api_view(['POST'])
def signup(request):
    data=request.data
    username=data.get('username')
    password=data.get('password')

    if not username or  not password:
        return Response({"success": False,"message":"Username or Password is required"})
    cursor.execute("SELECT * FROM Users WHERE username = %s", (username,))
    if cursor.fetchone():
        return Response({"success": False,"message":"Username already exists"})
    cursor.execute("INSERT INTO Users (username, password) VALUES (%s, %s)",(username,password))
    conn.commit()
    return Response({"success": True,"message":"User created successfully"})
@api_view(['POST'])
def login(request):
    data=request.data
    username=data.get('username')
    password=data.get('password')
    if not username or not password:
        return Response({"success": False,"error":"Username or Password is required"})
    query = "SELECT * FROM Users WHERE username = %s AND password = %s"
    cursor.execute(query,(username, password))
    user=cursor.fetchone()
    if not user:
        return Response({"success": False,"error":"Username or Password is invalid"})
    return Response({"success": True,"message":"Valid"})


@api_view(['POST'])
def details(request):
    data = request.data
    username = data.get('username')
    name = data.get('name')
    email = data.get('email')
    a = is_valid_email(email)
    if not a:
        return Response({"success": False, "message": "Email is not valid"})

    age = data.get('age')
    gender = data.get('gender')
    school = data.get('school')
    phone = data.get('phone')

    if not username or not name or not email or not age or not gender or not school or not phone:
        return Response({"success": False, "message": "All fields are required"})
    cursor.execute("SELECT * FROM Users WHERE username = %s", (username,))
    if cursor.fetchone():
        return Response({"success": False, "message": "Username already exists"})
    try:
        cursor.execute(
            "INSERT INTO StudentDetails (username, name, email, age, gender, school, phone) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (username, name, email, age, gender, school, phone)
        )
        conn.commit()
    except sqltor.IntegrityError as e:
        return Response({"success": False, "message": f"Database error: {str(e)}"})

    return Response({"success": True, "message": "Student details saved successfully"})

