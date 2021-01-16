import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
            : `https://loremflickr.com/80/80/dog`,
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
