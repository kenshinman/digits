import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useContext} from 'react/cjs/react.development';

import FullScreen from '../../components/FullScreen';
import ShowsListItem from '../../components/ShowsListItem';
import {MainContext} from '../../contexts/MainContext';

const ShowsList = () => {
  const {data, isLoading} = useContext(MainContext);
  console.log(data);
  return (
    <FullScreen>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data.data.posts}
        renderItem={({item}) => {
          console.log(item);
          return <ShowsListItem show={item} />;
        }}
      />
      {/* <Text selectable={true}>{JSON.stringify(data.data.posts)}</Text> */}
    </FullScreen>
  );
};

export default ShowsList;
