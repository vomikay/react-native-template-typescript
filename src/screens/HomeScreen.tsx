import {spacing} from 'core/utils/ui';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.root}>
      <Text>
        Edit <Text style={styles.highlight}>HomeScreen.tsx</Text> to change this
        screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(2),
  },
  highlight: {
    fontWeight: '700',
  },
});
