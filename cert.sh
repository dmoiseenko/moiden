#!/usr/bin/env bash

case $1 in
"get")
	certbot certonly --webroot -w /var/www/html -d moiden.com -d www.moiden.com -d wen.moiden.com
	;;
"renew")
	certbot renew
	;;
*)
  echo "first argument must be one of 'get' or 'renew'"
	exit 1;;
esac
