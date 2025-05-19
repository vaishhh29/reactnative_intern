

This project demonstrates how to build a unified system using:

-  **Expo React Native** mobile app using **WebView**
-  **Firebase Cloud Messaging (FCM)** for native push notifications
-  **Node.js script** to send notifications manually via FCM


##  Mobile App (Expo + WebView + Native FCM)

1. Create an **Expo** app using TypeScript.
2. Install and configure `react-native-webview` to load the deployed Next.js site.
3. Use `@react-native-firebase/app` and `@react-native-firebase/messaging` to:
   - Request notification permissions
   - Get and log the device’s FCM token
   - Listen for notifications (foreground + background)
4. Add `google-services.json` to `android/app` and configure `build.gradle`.

---

##  Firebase Setup

1. Create a Firebase project.
2. Enable **Authentication > Sign-in Method > Google**.
3. Enable **Cloud Messaging (FCM)**:
   - Enable API v1 in the Firebase console
   - Download the **Service Account JSON** key
4. Generate and copy the **FCM token** from the mobile app logs.

---

##  Sending Notifications (Node.js Script)

1. Create a **separate Node.js project** outside of the Expo project.
2. Install `firebase-admin`.
3. Place your `serviceAccount.json` in the same folder.
4. Use the script to send test push messages to the Expo app using the FCM token.

---

 How to Test

1. Start your Expo app on an Android emulator or real device.
2. Copy the FCM token printed in the app logs.
3. Run the Node.js sender script with the FCM token.
4. You should see a push notification on the device/emulator.

---
How to run

start the app by npx expo run:android 
After starting the app , open the server folder and run the node sendPush.js to send the message.


