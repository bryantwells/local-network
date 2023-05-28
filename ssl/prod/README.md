Nginx and Certbot in Docker:
https://hackmd.io/@Vatten/HyA1k1_ut

https://www.digitalocean.com/community/tutorials/how-to-acquire-a-let-s-encrypt-certificate-using-dns-validation-with-acme-dns-certbot-on-ubuntu-18-04

docker compose -f docker-compose.prod.yml up
docker compose -f docker-compose.prod.yml down --rmi all
docker compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d bln.projecteats.net -d radio-middleware.bln.projecteats.net -d radio-server.bln.projecteats.net -d tv-middleware.bln.projecteats.net -d tv-server.bln.projecteats.net -d library.bln.projecteats.net
docker compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d bln.projecteats.net -d radio-middleware.bln.projecteats.net -d radio-server.bln.projecteats.net -d tv-middleware.bln.projecteats.net -d tv-server.bln.projecteats.net -d library.bln.projecteats.net