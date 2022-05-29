from redis import ConnectionPool

pool = ConnectionPool(
    host='172.16.238.8',
    port=6379,
    max_connections=1000)

HUEY = {
    'huey_class': 'huey.RedisHuey',  # Huey implementation to use.
    'name': 'huey',  # Use db name for huey.
    'connection': {
        'connection_pool': pool
    },
    'immediate': False,
    'results': True,  # Store return values of tasks.
    'store_none': False,  # If a task returns None, do not save to results.
    'immediate': False,
    'utc': True,  # Use UTC for all times internally.
    'consumer': {
        'workers': 2,
        'worker_type': 'thread',
        'initial_delay': 0.5,  # Smallest polling interval, same as -d.
        'backoff': 1.15,  # Exponential backoff using this rate, -b.
        'max_delay': 10.0,  # Max possible polling interval, -m.
        'scheduler_interval': 1,  # Check schedule every second, -s.
        'periodic': True,  # Enable crontab feature.
        'check_worker_health': True,  # Enable worker health checks.
        'health_check_interval': 1,  # Check worker health every second.
    }
}