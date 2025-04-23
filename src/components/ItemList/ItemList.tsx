import React from 'react';
import Card from '../Card';
import moment from 'moment';
import {TouchableOpacity} from 'react-native';
import {Text, View, XStack} from 'tamagui';
import {ItemType} from '../../screens/Home/types';
import {useGetNewsAuthorQuery} from '../../services/news';
import {useNavigation} from '@react-navigation/native';

const ItemList = ({item}: ItemType) => {
  const {data: author} = useGetNewsAuthorQuery(item?.by);
  const navigation = useNavigation();

  return (
    <View>
      <Card>
        <Text fontSize={18} py={5} fontWeight={'500'}>
          {item?.title}
        </Text>

        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate('Details', {url: item?.url})}>
          <Text color={'#FB651E'}>{item?.url}</Text>
        </TouchableOpacity>

        <Text pt={5} fontSize={12}>
          Author:{' '}
          <Text fontSize={14} color="gray">
            {item?.by}
          </Text>
        </Text>

        <XStack gap={'$1'} pt="$4">
          <Text color="gray">
            ⧗ {moment.unix(item.time).format('H') + 'h'} |
          </Text>
          <Text color="gray">✰ scores: {item?.score} |</Text>
          <Text color="gray">♡ {author?.karma}</Text>
        </XStack>
      </Card>
    </View>
  );
};

export default React.memo(ItemList);
