import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FullScreen from '../../components/FullScreen';
import ShowsListItem from '../../components/ShowsListItem';
import data from '../../data.json';

const ShowsList = () => {
  const isLoading = false;
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FullScreen>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'lightgrey'}} />
        )}
        ListEmptyComponent={() => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              You don't have any shows to view
            </Text>
          </View>
        )}
        renderItem={({item}) => {
          return <ShowsListItem show={item} />;
        }}
      />
      {/* <Text selectable={true}>{JSON.stringify(data.data.posts)}</Text> */}
    </FullScreen>
  );
};

export default ShowsList;
