import React, { useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import { Context as NotesContext } from '../context/NotesContext';
import ListItem from '../components/ListItem';

const Notes = () => {
  const { state, fetchNotes } = useContext(NotesContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <FlatList
        data={state.notes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </>
  );
};

Notes.navigationOptions = ({ navigation }) => {
  return {
    headerTitleStyle: { fontFamily: 'ComicNeueBold' },
    headerLeft: () => (
      <Icon
        type="font-awesome"
        name="cog"
        iconStyle={{ color: 'gray' }}
        containerStyle={{ marginLeft: 15, marginBottom: 5 }}
        size={30}
        onPress={() => navigation.navigate('Account')}
      />
    ),
    headerRight: () => (
      <Icon
        type="font-awesome"
        name="edit"
        iconStyle={{ color: 'gray' }}
        containerStyle={{ marginRight: 15 }}
        size={28}
        onPress={() => navigation.navigate('')}
      />
    ),
  };
};

export default Notes;
