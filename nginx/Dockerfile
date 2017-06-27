FROM nginx:1.13.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
COPY ssl.conf /etc/nginx/ssl.conf
COPY moiden.com.conf /etc/nginx/sites-enabled/moiden.com.conf
COPY wen.moiden.com.conf /etc/nginx/sites-enabled/wen.moiden.com.conf
COPY wbdv.moiden.com.conf /etc/nginx/sites-enabled/wbdv.moiden.com.conf
