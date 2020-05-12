import createDataContext from './createDataContext';
import notesApi from '../api/notes';

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'fetch_notes':
      return { notes: payload.sort((a, b) => a.dateUpdated < b.dateUpdated) };
    case 'delete_note':
      return { notes: state.notes.filter((note) => note._id !== payload) };
    default:
      return state;
  }
};

const fetchNotes = (dispatch) => async () => {
  try {
    const response = await notesApi.get('/notes');
    dispatch({ type: 'fetch_notes', payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editNote = (_dispatch) => async (_id, content) => {
  try {
    await notesApi.put('/notes', { _id, content });
  } catch (err) {
    console.log(err);
  }
};

const deleteNote = (dispatch) => async (_id) => {
  try {
    await notesApi.delete('/notes', { data: { _id } });
    dispatch({ type: 'delete_note', payload: _id });
  } catch (err) {
    console.log(err);
  }
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { fetchNotes, editNote, deleteNote },
  { notes: [] }
);
