import requests
url="http://127.0.0.1:8000/api/signup/"
data={"username":"test","password":"12345"}
response=requests.post(url,json=data)
print(response.json())