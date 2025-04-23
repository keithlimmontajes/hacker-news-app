import React from 'react';
import {View} from 'tamagui';
import {CardProps} from './types';

const Card = ({children}: CardProps) => {
  return (
    <View
      my="$2"
      bg="white"
      p={'$2'}
      borderWidth={1}
      borderRadius={8}
      // @ts-ignore
      borderColor="$borderGray">
      {children}
    </View>
  );
};

export default Card;
