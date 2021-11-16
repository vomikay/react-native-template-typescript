# 🐸 React Native Template TypeScript

> В данный момент Push-уведомления для iOS могут не работать. Если вы столкнулись с данной проблемой попробуйте сами [настроить React Native Firebase](https://rnfirebase.io/).

## 🏷️ Возможности

- Простая JWT аутентификация
- Firebase Push-уведомления
- Загрузочный экран
- Production и Development конфигурации

## 📋 Требования

- Node.js 12 LTS и выше
- Xcode 11.13.1 и выше

## 🚀 Быстрый старт

1. Сoздайте проект

```sh
npx react-native init MyApp --template https://github.com/vomikay/react-native-template-typescript.git
```

2. [Создайте новое Firebase приложение](https://console.firebase.google.com/)

3. [Добавьте учетные данные для Android](https://rnfirebase.io/#generating-android-credentials)

4. [Настройте уведомления для iOS](https://rnfirebase.io/messaging/usage/ios-setup)

5. [Добавьте учетные данные для iOS](https://rnfirebase.io/#generating-ios-credentials)

6. Установите зависимости

```sh
yarn install
cd ios && pod install
```

7. Запустите приложение

```sh
yarn start
yarn android [ios]
```
