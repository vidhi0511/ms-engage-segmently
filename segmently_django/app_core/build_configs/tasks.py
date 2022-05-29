from huey import crontab
from django.db import models
from huey.contrib.djhuey import periodic_task, task, db_periodic_task, db_task
import time

@db_task()
def do_something():
    time.sleep(5)
    print("Do something at the end")