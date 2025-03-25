import admin from "firebase-admin";
import serviceAccount from "../config/firebase.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendPushNotification = async (token, message) => {
  await admin.messaging().send({
    token,
    notification: { title: "RideSync Alert", body: message },
  });
};
