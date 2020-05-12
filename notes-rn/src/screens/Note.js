import React, { useContext, useRef } from 'react';

import { Context as NotesContext } from '../context/NotesContext';
import NoteInput from '../components/NoteInput';

const Note = ({ navigation }) => {
  const { state, editNote } = useContext(NotesContext);
  const id = navigation.getParam('id');
  const note = state.notes.find((note) => note._id === id);

  const initialContent = useRef(note.content);

  const onEndEditing = (e) => {
    if (e.nativeEvent.text !== initialContent.current) {
      editNote(note._id, e.nativeEvent.text);
    }
  };

  return <NoteInput onEndEditing={onEndEditing} defaultValue={note.content} />;
};

Note.navigationOptions = {
  title: '',
};

export default Note;
