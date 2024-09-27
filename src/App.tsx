import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import StoreCard from './components/StoreCard';
import shop_data from './shop_data.json';

function App() {
  const renderStore=({item})=><StoreCard store={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHeader}>NATIVESTORE</Text>
      </View>
      <TextInput placeholder="Ara..." style={styles.input} />

      <FlatList
        data={shop_data}
        renderItem={renderStore}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 30,
    color: '#6A9AB0',
    textAlign: 'center',
    marginTop: 7,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor:'white',
    fontSize: 22,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    color: 'gray',
  },
});
export default App;
