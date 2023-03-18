import { createContext } from "react";

/* if (typeof window !== "undefined") {
  // do localStorage stuff here
  const item = localStorage.getItem("key");
  console.log(item);
}

console.log(localStorage === window.localStorage);
localStorage.setItem("text", "text LocalStorage");
console.log(localStorage.getItem("text")); */

const initialState = {
  noteList: [
    { id: 1, title: "Login Netflix", content: "username: **** password: ****" },
    { id: 2, title: "To buy", content: "Milk, Coffee, Sugar, Pasta" },
    {
      id: 3,
      title: "To watch",
      content: "You, The walking dead, Breaking Bread",
    },
  ],

  initialNoteList: [
    { id: 1, title: "Login Netflix", content: "username: **** password: ****" },
    { id: 2, title: "To buy", content: "Milk, Coffee, Sugar, Pasta" },
    {
      id: 3,
      title: "To watch",
      content: "You, The walking dead, Breaking Bread",
    },
  ],

  ToDoList: [
    {
      id: 1,
      text: "Deliver project",
    },
    {
      id: 2,
      text: "Buying Coffee",
    },
    {
      id: 3,
      text: "Cleaning House",
    },
    {
      id: 4,
      text: "Lunch with Elsa",
    },
    {
      id: 5,
      text: "Study React",
    },
    {
      id: 6,
      text: "Manicure",
    },
  ],

  initialToDoList: [
    {
      id: 1,
      text: "Deliver project",
    },
    {
      id: 2,
      text: "Buying Coffee",
    },
    {
      id: 3,
      text: "Cleaning House",
    },
    {
      id: 4,
      text: "Lunch with Elsa",
    },
    {
      id: 5,
      text: "Study React",
    },
    {
      id: 6,
      text: "Manicure",
    },
  ],

  /*   noteList: JSON.parse(localStorage.getItem("note-list")) || [],
  initialNoteList: JSON.parse(localStorage.getItem("initial-note-list")) || [],
  toDoList: JSON.parse(localStorage.getItem("to-do-list")) || [],
  initialToDoList: JSON.parse(localStorage.getItem("initial-to-do-list")) || [], */
  currentEditNote: null,
  isModalOpen: false,
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
