openssl req -x509 -nodes -days 1024 -newkey rsa:2048 -keyout local-cert/server.key -out local-cert/server.crt -config local.cnf
cat local-cert/server.key > local-cert/server.pem
cat local-cert/server.crt >> local-cert/server.pem