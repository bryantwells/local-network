openssl req -x509 -nodes -days 1024 -newkey rsa:2048 -keyout cert/server.key -out cert/server.crt -config san.cnf
cat cert/server.key > cert/server.pem
cat cert/server.crt >> cert/server.pem