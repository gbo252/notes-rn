import React, { useContext, useRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import { useHeaderHeight } from 'react-navigation-stack';

import { Context as NotesContext } from '../context/NotesContext';
import useNoteScroll from '../hooks/useNoteScroll';

const Note = ({ navigation }) => {
  const { state, editNote } = useContext(NotesContext);
  const id = navigation.getParam('id');
  const note = state.notes.find((note) => note._id === id);
  const { editable, onScroll, onFocus, onBlur } = useNoteScroll();
  const initialContent = useRef(note.content);

  const onEndEditing = (e) => {
    if (e.nativeEvent.text !== initialContent.current) {
      editNote(note._id, e.nativeEvent.text);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#FFFFE5' }}
      behavior="padding"
      keyboardVerticalOffset={useHeaderHeight() + 15}
      enabled
    >
      <Input
        defaultValue={note.content}
        multiline
        textAlignVertical="top"
        style={{
          fontSize: 20,
          paddingHorizontal: 10,
        }}
        inputStyle={{ paddingBottom: 20, paddingTop: 10 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onEndEditing={onEndEditing}
        onScroll={onScroll}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={editable}
      />
    </KeyboardAvoidingView>
  );
};

Note.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title'),
    headerTitleStyle: { fontFamily: 'ComicNeueBold' },
  };
};

export default Note;
