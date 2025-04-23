import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {View, Text} from 'tamagui';

import {
  useGetAllNewsIdQuery,
  useGetNewsDetailsBatchQuery,
} from '../../services/news';

import ItemList from '../../components/ItemList';
import InputSearch from '../../components/InputSearch';

const HomeScreen = () => {
  const {data = [], refetch, isFetching} = useGetAllNewsIdQuery();
  const {data: items = [], isFetching: isFetchingDetails} =
    useGetNewsDetailsBatchQuery(data, {
      skip: !data.length,
    });

  return (
    <View bg={'$background' as any} flex={1} px="$3" py="$4">
      <InputSearch />
      <View p="$5" />
      <FlatList
        data={items ?? []}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ItemList item={item} />}
        ListEmptyComponent={
          !isFetching && !isFetchingDetails ? (
            <Text>No results found.</Text>
          ) : null
        }
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            tintColor="#FB651E"
            colors={['#FB651E']}
            refreshing={isFetchingDetails}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
