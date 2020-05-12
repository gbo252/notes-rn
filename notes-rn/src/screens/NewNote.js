import React, { useContext } from 'react';

import { Context as NotesContext } from '../context/NotesContext';
import NoteInput from '../components/NoteInput';

const NewNote = () => {
  const { newNote } = useContext(NotesContext);

  const onEndEditing = (e) => {
    if (e.nativeEvent.text) {
      newNote(e.nativeEvent.text);
    }
  };

  return <NoteInput onEndEditing={onEndEditing} defaultValue="" />;
};

NewNote.navigationOptions = {
  headerTitleStyle: { fontFamily: 'ComicNeueBold' },
  title: 'New Note',
};

export default NewNote;
