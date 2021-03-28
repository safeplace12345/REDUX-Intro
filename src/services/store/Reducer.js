import {movies} from '../store/movie_database'
let index = 0;
export default function reducer(state = [], action) {
  let actions = action.payload
  switch (action.type) {
    case "addedMovie":
      return [
        ...state,
        {
          id: ++index,
          title: actions.title,
          genre: actions.genre,
          year: actions.year,
        },
      ];
    case "alteredYear":
      return state.map((obj) =>
        obj.id !== actions.id ? obj : { ...obj, year: actions.year }
      );
    case "deletedMovie":
      return state.filter(({id}) => id === actions.id);
    default:
      return state;
  }
}
