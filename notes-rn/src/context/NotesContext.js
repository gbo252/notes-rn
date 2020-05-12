import createDataContext from './createDataContext';
import notesApi from '../api/notes';

const sortByDate = (a, b) => {
  return a.dateUpdated < b.dateUpdated;
};

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'fetch_notes':
      return { notes: payload.sort(sortByDate) };
    case 'new_note':
      return { notes: [payload, ...state.notes] };
    case 'edit_note':
      return {
        notes: state.notes
          .map((note) => {
            if (note._id === payload._id) {
              return {
                ...note,
                content: payload.content,
                dateUpdated: new Date(Date.now()).toISOString(),
              };
            }
            return note;
          })
          .sort(sortByDate),
      };
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

const newNote = (dispatch) => async (content) => {
  try {
    const response = await notesApi.post('/notes', { content });
    dispatch({ type: 'new_note', payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editNote = (dispatch) => async (_id, content) => {
  try {
    await notesApi.put('/notes', { _id, content });
    dispatch({ type: 'edit_note', payload: { _id, content } });
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
  { fetchNotes, editNote, deleteNote, newNote },
  { notes: [] }
);
