import React from 'react';
import {Text, View} from 'react-native';
import {Center, NativeBaseProvider} from 'native-base';
import {AvatarC} from '../../compenets/Avatar';

export const Home = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AvatarC image="" />
      </Center>
    </NativeBaseProvider>
  );
};
