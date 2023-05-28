Nginx and Certbot in Docker:
https://hackmd.io/@Vatten/HyA1k1_ut

https://www.digitalocean.com/community/tutorials/how-to-acquire-a-let-s-encrypt-certificate-using-dns-validation-with-acme-dns-certbot-on-ubuntu-18-04


sudo docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d projecteats.net www.projecteats.net bln.projecteats.net radio-middleware.bln.projecteats.net radio-server.bln.projecteats.net tv-middleware.bln.projecteats.net tv-server.bln.projecteats.net library.bln.projecteats.net