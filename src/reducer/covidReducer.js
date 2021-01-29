import { GET_WORLD, GET_SUMMARY } from "../action/types";

const initstate = {
  world: [
    {
      NewConfirmed: 1,
      TotalConfirmed: 1,
      NewDeaths: 1,
      TotalDeaths: 1,
      NewRecovered: 1,
      TotalRecovered: 1,
    },
  ],
};

export default function (state = initstate, action) {
  switch (action.type) {
    case GET_WORLD:
      return { ...state, world: action.payload };
    default:
      return state;
  }
}
