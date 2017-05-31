#!/usr/bin/env bash

certbot certonly --webroot -w /var/www/html -d moiden.com -d www.moiden.com -d wen.moiden.com
