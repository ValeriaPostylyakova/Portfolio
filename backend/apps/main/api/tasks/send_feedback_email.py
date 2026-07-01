from celery import shared_task
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


@shared_task(
    autoretry_for=(Exception,),
    retry_kwargs={'max_retries': 3, 'countdown': 60}
)
def send_feedback_email_task(name, email, message):
    try:
        admin_email = "valeria.postylyakova@yandex.ru"
        context = {
            "name": name,
            "user_email": email,
            "message": message
        }

        html_content = render_to_string("email/feedback.html", context)

        msg = EmailMessage(
            subject="Обратная связь",
            body=html_content,
            from_email=None,
            to=[admin_email],
            reply_to=[email],
        )

        msg.content_subtype = "html"

        msg.send(fail_silently=False)
        return f"Success: Feedback from {email} processed"

    except Exception as e:
        raise e
