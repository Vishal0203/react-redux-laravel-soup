#!/usr/bin/env bash
if [ -z "$(composer global show | grep pragmarx/laravelcs)" ]
then
	printf "\n\nInstalling phpcs ... "
	composer global require pragmarx/laravelcs &> /dev/null
	printf "Done"
fi

printf "\n=== RUNNING SERVER VALIDATION === "
cd server
exit_status=0

server_errors=$(phpcs --standard=PSR2 app/)
if [ "$?" != "0" ]; then
	printf "$server_errors"
	exit_status=1
else
	printf "PASSED" 
fi

cd ../webapp
printf "\nInstalling node dependencies ... "
npm install --only=dev &> /dev/null
printf "Done"

printf "\n=== RUNNING WEBAPP VALIDATION === "

webapp_errors=$(./node_modules/.bin/eslint ./client)
if [ "$?" != "0" ]; then
	printf "\n$webapp_errors"
	exit_status=1
else
	printf "PASSED\n"
fi

exit $exit_status
