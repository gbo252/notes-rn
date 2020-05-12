import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

import { Context as NotesContext } from '../context/NotesContext';

const Note = ({ navigation }) => {
  const { state, editNote } = useContext(NotesContext);
  const id = navigation.getParam('id');
  const note = state.notes.find((note) => note._id === id);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFFFE5' }}
      // keyboardDismissMode="on-drag"
    >
      <Input
        defaultValue={note.content}
        multiline={true}
        textAlignVertical="top"
        style={{ fontSize: 20, margin: 10 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onEndEditing={(e) => editNote(note._id, e.nativeEvent.text)}
      />
    </ScrollView>
  );
};

Note.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title'),
    headerTitleStyle: { fontFamily: 'ComicNeueBold' },
  };
};

export default Note;
