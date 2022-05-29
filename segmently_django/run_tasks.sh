#!/bin/bash
serviceup(){
    echo [$0] Starting Huey Server...
    python manage.py run_huey
}

sleep 10
until serviceup; do
  echo Tansfer disrupted, retrying in 20 seconds...
  sleep 20
done