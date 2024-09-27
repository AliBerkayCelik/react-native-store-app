import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop:10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width / 2,
    marginBottom:10,
  },
  inner_container: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    flex:1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginTop:5,
  },
  price: {
    fontSize:18,
    marginTop:4,
  },
  isInStock:{
    color:'red',
    fontWeight:'bold',
    fontSize:20,
    marginTop:5,
  },
});
