### Nginx and Certbot in Docker:
https://hackmd.io/@Vatten/HyA1k1_ut

### HTTP-01 Challenge
```
docker compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d bln.projecteats.org -d radio-middleware.bln.projecteats.org -d radio-server.bln.projecteats.org -d tv-middleware.bln.projecteats.org -d tv-server.bln.projecteats.org -d library.bln.projecteats.org
```
```
docker compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d bln.projecteats.org -d radio-middleware.bln.projecteats.org -d radio-server.bln.projecteats.org -d tv-middleware.bln.projecteats.org -d tv-server.bln.projecteats.org -d library.bln.projecteats.org
```

### DNS Challenge
```
docker compose -f docker-compose.prod.yml run --rm certbot certonly --manual --preferred-challenges dns -d dashboard.bln.projecteats.org
```