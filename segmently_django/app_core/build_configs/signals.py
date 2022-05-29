from django.db.models import Q
from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save
from .models import BuildConfig
from app_core.build_configs.tasks import run_analytics_pipeline

@receiver(post_save, sender=BuildConfig, dispatch_uid="handle_analytics_run")
def handle_analytics_run(sender, instance, **kwargs):
    print("Came to POST SAVE")
    if instance.status == "QUEUED":
        print(instance.id)
        run_analytics_pipeline.schedule((instance.id,), delay=2)
