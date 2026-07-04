import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: {
            logo: {
                name: 'Валерия Постылякова',
            },
            headerMenuItems: {
                home: 'Главная',
                about: 'Обо мне',
                projects: 'Проекты',
                contacts: 'Контакты',
            },
            selectTitles: {
                about: 'Обо мне',
                projects: 'Проекты',
                contacts: 'Контакты',
            },
            welcomeTitle: 'Привет, я Постылякова Валерия',
            developmentHistoryTitle: 'Моя история разработки',
            skillsTitle: 'Мои навыки',
            contactsForm: {
                inputName: {
                    label: 'Имя',
                    placeholder: 'Введите ваше имя',
                },
                inputEmail: {
                    label: 'Почта',
                    placeholder: 'Введите вашу почту',
                },
                inputMessage: {
                    label: 'Сообщение',
                    placeholder: 'Напишите ваше сообщение',
                },
                buttonSubmit: 'Отправить',
            },
            projects: {
                linkToGitHub: 'Ссылка на GitHub',
                reviewButton: 'Обзор проекта',
            },
            project: {
                overview: 'Обзор проекта',
                features: 'Этот проект реализует:',
                capabilities: 'Этот проект предоставляет возможности:',
                tools: 'Используемые инструменты:',
                preview: 'Предпросмотр',
                buttonOpenProject: 'Открыть проект',
                buttonGoBack: 'Назад',
            },
            footer: {
                name: 'Валерия Постылякова',
                social: 'Социальные сети',
            },
            notFound: {
                title: 'Ой! Страница не найдена',
                description:
                    'Похоже, вы забрели не туда. Давайте вернемся на главную.',
                buttonBack: 'На главную',
            },
            notFoundProject: {
                title: 'Проект не найден',
                description:
                    'К сожалению, запрашиваемый проект не существует или был перемещен. Попробуйте найти его в списке моих работ.',
                buttonBack: 'На главную',
                buttonGoProjects: 'К списку проектов',
            },
        },
    },
    en: {
        translation: {
            logo: {
                name: 'Valeria Postylyakova',
            },
            headerMenuItems: {
                home: 'Home',
                about: 'About',
                projects: 'Projects',
                contacts: 'Contacts',
            },
            selectTitles: {
                about: 'About',
                projects: 'Projects',
                contacts: 'Contacts',
            },
            welcomeTitle: "Hey, I'm Postylyakova Valeria",
            developmentHistoryTitle: 'My development history',
            skillsTitle: 'My skills',
            contactsForm: {
                inputName: {
                    label: 'Name',
                    placeholder: 'Enter your name',
                },
                inputEmail: {
                    label: 'Email',
                    placeholder: 'Enter your email',
                },
                inputMessage: {
                    label: 'Message',
                    placeholder: 'Write your message',
                },
                buttonSubmit: 'Send',
            },
            projects: {
                linkToGitHub: 'Link to GitHub',
                reviewButton: 'Project review',
            },
            project: {
                overview: 'Project overview',
                features: 'This project implements:',
                capabilities: 'This project possibilities:',
                tools: 'Tools used',
                preview: 'Preview',
                buttonOpenProject: 'Open project',
                buttonGoBack: 'Go back',
            },
            footer: {
                social: 'Social',
            },
            notFound: {
                title: 'Ouch! Page not found',
                description:
                    "It looks like you've gone the wrong way. Let's get back to the main page.",
                buttonBack: 'To the main page',
            },
            notFoundProject: {
                title: 'Project not found',
                description:
                    'Unfortunately, the requested project does not exist or has been moved. Try to find it in my work list.',
                buttonBack: 'To the main page',
                buttonGoProjects: 'To the list of projects',
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
