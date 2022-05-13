import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IRounds {
  round: number;
}

const RoundInfo: React.FC<IRounds> = ({round}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.roundInfo}>Round: {round}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  roundInfo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default RoundInfo;
