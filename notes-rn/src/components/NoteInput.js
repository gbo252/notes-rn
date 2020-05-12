import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import { useHeaderHeight } from 'react-navigation-stack';

import useNoteScroll from '../hooks/useNoteScroll';

const NoteInput = ({ onEndEditing, defaultValue, autoFocus = false }) => {
  const { editable, onScroll, onFocus, onBlur } = useNoteScroll();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#FFFFE5' }}
      behavior="padding"
      keyboardVerticalOffset={useHeaderHeight() + 15}
      enabled
    >
      <Input
        defaultValue={defaultValue}
        multiline
        textAlignVertical="top"
        style={{
          fontSize: 20,
          paddingHorizontal: 10,
        }}
        inputStyle={{ paddingBottom: 20, paddingTop: 10 }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        autoFocus={autoFocus}
        onEndEditing={onEndEditing}
        onScroll={onScroll}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={editable}
      />
    </KeyboardAvoidingView>
  );
};

export default NoteInput;
