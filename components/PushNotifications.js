import PushNotification from 'react-native-push-notification';

const now = new Date();
const scheduleTime = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  9,
  55
);

PushNotification.localNotificationSchedule({
  message: 'Good morning! 5 minutes left for the market to open!',
  date: scheduleTime,
});
