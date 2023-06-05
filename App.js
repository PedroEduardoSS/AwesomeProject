import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {getData, postData, putData, deleteData} from './server'

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="GET"
        onPress={getData}
      />
      <Button
        title="POST"
        onPress={postData}
      />
      <Button
        title="PUT"
        onPress={putData}
      />
      <Button
        title="DELETE"
        onPress={deleteData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
