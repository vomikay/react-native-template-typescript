# 🐸 React Native Template TypeScript

> В данный момент Push-уведомления для iOS могут не работать. Если вы столкнулись с данной проблемой попробуйте сами [настроить React Native Firebase](https://rnfirebase.io/).

## 🏷️ Возможности

- Простая JWT аутентификация
- Firebase Push-уведомления
- Загрузочный экран
- Production и Development сборки
- Поддержка SVG иконок

## 📋 Требования

- [Node.js](https://nodejs.org/) 12 LTS и выше
- [Yarn](https://yarnpkg.com/) 1.9 и выше
- [Xcode](https://apps.apple.com/ru/app/xcode/id497799835) 11.13.1 и выше

## ✔️ Зависимости

- Push-уведомления: [React Native Firebase](https://rnfirebase.io/), [Notify](notifee.app)
- Загрузочный экран:
  [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)
- Конфигурация переменных окружения: [react-native-config](https://github.com/luggit/react-native-config)
- Поддержка SVG иконок: [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- Всплывающие уведомления: [react-native-toast-message](https://github.com/calintamas/react-native-toast-message)
- Хранилище данных: [Redux Toolkit](https://redux-toolkit.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist)

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

## ❔ FAQ

### Как опубликовать приложение в Google Play Store?

Прежде чем загружать релизную сборку в Play Store, обязательно тщательно ее протестируйте. Сначала удалите любую предыдущую версию приложения, которую вы уже установили. Установите приложение на устройство, используя команду `yarn android:release`. Далее следуйте [инструкции](https://reactnative.dev/docs/signed-apk-android) с официального сайта React Native.

### Как опубликовать приложение в Apple App Store?

Прежде чем опубликовать приложение в Apple App Store, обязательно тщательно его протестируйте. Установите приложение на устройство, используя команду `yarn ios:release` или команду Build в Xcode со схемой конфигурации Release. Далее следуйте следующей [инструкции](https://medium.com/timeless/adding-react-native-app-to-app-store-connect-c4d45571df0d).

### Как изменить иконку Push-уведомлений?

> Инонка Push-уведомлений для платформы iOS должна соответствовать иконке, которая испльзуется для приложения. Соответственно, для того, чтобы изменить иконку Push-уведомлений, нужно заменить иконку самого приложения. [Human Interface Guidlines](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/).

Для того чтобы изменить иконку Push-уведомлений на Android, следуйте [инструкции](https://notifee.app/react-native/docs/android/appearance#small-icons) библиотеки Notify. Затем необходимо добавить иконку для React Native Firebase:

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<manifest xmlns:tools="http://schemas.android.com/tools">
  <application>
    <!-- ... -->

    <meta-data
      android:name="com.google.firebase.messaging.default_notification_icon"
      android:resource="@drawable/my_notification_icon"
    />
  </application>
</manifest>
```

На Android в любых сообщениях, отображающих уведомления, не используется цвет для окрашивания содержимого. Чтобы задать собственный цвет оттенка, измените следующие файлы:

```xml
<!-- android/app/src/main/res/values/colors.xml -->
<resources>
  <color name="my-custom-color">#123456</color>
</resources>
```

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<manifest xmlns:tools="http://schemas.android.com/tools">
  <application>
    <!-- ... -->

    <meta-data
      android:name="com.google.firebase.messaging.default_notification_color"
      android:resource="@color/my-custom-color"
      tools:replace="android:resource"
    />
  </application>
</manifest>
```
