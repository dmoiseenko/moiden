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
"update")
  ${DOCKER_COMPOSE} pull
  ;;
*)
  echo "first argument must be one of 'up' or 'down' or 'restart' or 'update'"
	exit 1;;
esac
