import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HTML from 'react-native-render-html';
import {colors} from '../../constants';

const ShowsDetail = ({route}) => {
  const {show} = route.params;

  let da = {
    radio_show_recurring_days: ['wed', 'thu'],
    radio_show_recurring_from: ['14:10'],
    radio_show_recurring_to: ['14:40'],
    'is-cover-image-fixed': ['0'],
    'cover-size': ['lg'],
    'hide-footer': ['0'],
    sidebar: ['on'],
    slide_template: ['default'],
    radio_show_host: ['Kingsley, Aderonke & Josh Black'],
  };

  const {
    radio_show_recurring_days,
    radio_show_recurring_from,
    radio_show_recurring_to,
    radio_show_host,
  } = show.custom_fields;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: show?.attachments[0]?.url
            ? `${show?.attachments[0]?.url}`
            : `https://digitsound.com.ng/wp-content/uploads/2017/09/digits-logo.jpg`,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{show.title}</Text>
        <Text style={styles.meta}>Hosted by: {radio_show_host.join(' ')}</Text>
        <Text style={styles.meta}>
          Days: {radio_show_recurring_days.join(', ').toUpperCase()}
        </Text>
        <Text style={styles.meta}>
          Time: {radio_show_recurring_from[0]} - {radio_show_recurring_to[0]}
        </Text>
        <HTML source={{html: show.content}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: colors.primary,
  },
  meta: {
    marginVertical: 5,
  },
});

export default ShowsDetail;
