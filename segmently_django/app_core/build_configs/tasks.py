from huey import crontab
from django.db import models
from huey.contrib.djhuey import periodic_task, task, db_periodic_task, db_task
import time
import pickle

import os
BASE_DIR = (os.path.dirname(os.path.abspath(__file__)))

@db_task()
def run_analytics_pipeline(build_config_id):
    print(build_config_id)
    sc = pickle.load(open(BASE_DIR+'/pickles/scaler.pkl','rb'))
    print(sc)