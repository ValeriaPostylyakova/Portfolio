import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ru: {
        translation: {
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
                social: 'Социальные сети',
            },
        },
    },
    en: {
        translation: {
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
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    lng: 'ru',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
