import React, { useContext } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem as NoteItem, Icon } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Context as NotesContext } from '../context/NotesContext';

const ListItem = ({ item, navigation }) => {
  const { deleteNote } = useContext(NotesContext);

  const LeftAction = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Icon
        type="font-awesome"
        name="edit"
        iconStyle={{ color: '#fff' }}
        containerStyle={{ marginHorizontal: 20 }}
      />
    </View>
  );

  const RightAction = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Icon
        type="font-awesome"
        name="trash"
        iconStyle={{ color: '#fff' }}
        containerStyle={{ marginHorizontal: 20 }}
      />
    </View>
  );

  return (
    <Swipeable
      renderLeftActions={LeftAction}
      renderRightActions={RightAction}
      // onSwipeableLeftOpen={fetchNotes}
      onSwipeableRightOpen={() => deleteNote(item._id)}
      friction={2}
      leftThreshold={100}
      rightThreshold={150}
    >
      <NoteItem
        title={item.content.split(/\n/)[0]}
        subtitle={new Date(item.dateUpdated).toLocaleString()}
        onPress={() => navigation.navigate('Note', { id: item._id })}
        containerStyle={{ backgroundColor: '#FFFFE5' }}
        bottomDivider
        chevron
      />
    </Swipeable>
  );
};

export default withNavigation(ListItem);
