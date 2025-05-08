import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';

export async function scheduleReminder(title, body, seconds) {
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: { seconds : 2 },
  });
}
