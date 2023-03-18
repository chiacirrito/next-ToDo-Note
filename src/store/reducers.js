import { actions } from "@/store/actions";

const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_NOTE:
      localStorage.setItem(
        "note-list",
        JSON.stringify([...state.noteList, action.payload])
      );
      localStorage.setItem(
        "initial-note-list",
        JSON.stringify([...state.noteList, action.payload])
      );
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
        initialNoteList: [...state.noteList, action.payload],
      };

    case actions.ON_SEARCH_NOTE:
      return {
        ...state,
        noteList: state.initialNoteList.filter(
          (item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.content.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case actions.DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };

    case actions.EDIT_NOTE:
      return {
        ...state,
        noteList: state.noteList.map((note) => {
          if (note.id === state.currentEditNote) {
            return action.payload;
          }
          return note;
        }),
      };

    case actions.ON_SET_CURRENT_EDIT_NOTE:
      return {
        ...state,
        currentEditNote: parseInt(action.payload),
      };

    case actions.ON_HANDLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case actions.ADD_NEW_ELEMENT:
      return {
        ...state,
        ToDoList: [...state.ToDoList, action.payload],
        initialToDoList: [...state.ToDoList, action.payload],
      };

    case actions.DELETE_ELEMENT:
      return {
        ...state,
        ToDoList: state.ToDoList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { globalReducer };
