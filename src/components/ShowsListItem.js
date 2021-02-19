import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const ShowsListItem = ({show}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShowsDetail', {show})}
      style={styles.itemWrap}>
      <Image
        style={styles.image}
        source={{
          uri: show?.attachments[0]?.url
            ? `${show?.attachments[0]?.url}`
            : `https://digitsound.com.ng/wp-content/uploads/2017/09/digits-logo.jpg`,
        }}
      />
      <View style={styles.itemTextWrap}>
        <Text style={styles.itemTitle}>{show.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrap: {
    padding: 10,
    flexDirection: 'row',
    height: 80,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  itemTextWrap: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  itemTitle: {
    fontWeight: '500',
    fontSize: 18,
  },
});

export default ShowsListItem;
