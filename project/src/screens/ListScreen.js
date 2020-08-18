import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'},
  ];
  return (
    <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={friends}
    keyExtractor={friends => friends.name}
    renderItem={({item}) => <Text style={styles.textStyle}>{item.name}</Text>}

    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})
export default ListScreen;
