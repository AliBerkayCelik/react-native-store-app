import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: store.imgURL}}  />
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.isInStock}>{store.inStock ? store.inStock : 'Stokta yok'}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
