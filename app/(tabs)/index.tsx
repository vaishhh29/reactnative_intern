import messaging from "@react-native-firebase/messaging";
import React, { useEffect } from "react";
import { Alert, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  useEffect(() => {
    const setupFCM = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          const token = await messaging().getToken();
          console.log("FCM Token:", token);

          messaging().onMessage(async remoteMessage => {
            Alert.alert(
              remoteMessage.notification?.title || "New Notification",
              remoteMessage.notification?.body || ""
            );
          });
        }
      } catch (err) {
        console.error("FCM setup failed", err);
      }
    };

    setupFCM();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://next-mui-google-signup-xvqf-hctdedx61.vercel.app" }} style={styles.webview} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
