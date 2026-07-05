import logging

from celery import shared_task
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

logger = logging.getLogger(__name__)


@shared_task(
    autoretry_for=(Exception,),
    retry_kwargs={'max_retries': 3, 'countdown': 60}
)
def send_feedback_email_task(name, email, message):
    logger.info(
        "Начата обработка письма обратной связи. Email отправителя: %s",
        email,
    )

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

        logger.info(
            "Письмо успешно отправлено. Email отправителя: %s",
            email,
        )

        return f"Success: Отзыв от {email} успешно обработан"

    except Exception as e:
        logger.exception(
            "Не удалось отправить письмо. Email отправителя: %s, Ошибка: %s",
            email,
            str(e),
        )
        raise
