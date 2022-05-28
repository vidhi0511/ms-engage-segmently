#!/bin/bash

#echo STARTINGD RUN.SH FOR STARTING DJANGO SERVER PORT IS $PORT
#
#echo ENVIRONMENT VAIRABLES IN RUN.SH


#Change this values for django superuser
USER="ms_engage"
MAIL="vidhisingh0511@gmail.com"
PASS="ms_engage@123"
SERVER_PORT=8000

# $0 & $1 are special environment variables
# $0 is for file name
# $1 is for first parameter passed during executing of the script

echo [$0] Python Version
python --version

makemigrations()
{
    app=$( echo $1 | sed 's/\/*$//g')
    echo "Make Migrations at app level $app"
    python manage.py makemigrations $app
}


serviceup()
{
    echo [$0] Starting Overall Migration...
    python manage.py makemigrations

    echo [$0] Starting App level Migration...
    for d in */ ; do
        for subdir in "$d"*; do
            file=$(basename $subdir)
            check="models.py"
            if [ "$file" == "$check" ]
            then
               echo "$d"
            fi
        done
    done
    echo [$0] Applying Migrations...
    python manage.py migrate
    echo "from django.contrib.auth import get_user_model;User = get_user_model(); User.objects.create_superuser('${USER}', '${MAIL}', '${PASS}')" | python manage.py shell

    echo [$0] Starting Django Server...
    echo [$0] port is------------------- $SERVER_PORT
    python manage.py runserver 0.0.0.0:$SERVER_PORT --noreload
}

sleep 10
until serviceup; do
  echo Tansfer disrupted, retrying in 20 seconds...
  sleep 20
done