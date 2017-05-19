#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose --project-name moiden -f docker-compose.yml"

case $1 in
"up")
	${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} up -d
	;;
"down")
	${DOCKER_COMPOSE} down
	;;
"restart")
	${DOCKER_COMPOSE} restart
	;;
*)
  echo "first argument must be one of 'up' or 'down'"
	exit 1;;
esac
