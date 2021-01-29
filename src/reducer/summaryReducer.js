import { GET_WORLD, GET_SUMMARY } from "../action/types";

const initstate = {
  summary: [
    

{
ID: "a95bc8a2-d250-45e4-b39e-2809778156ad",
Country: "Afghanistan",
CountryCode: "AF",
Slug: "afghanistan",
NewConfirmed: 37,
TotalConfirmed: 54891,
NewDeaths: 8,
TotalDeaths: 2397,
NewRecovered: 34,
TotalRecovered: 47583,
Date: "2021-01-29T04:19:38.354Z",
Premium: {}
},


  ]
};

export default function (state = initstate, action) {
  switch (action.type) {
    case GET_SUMMARY:
      return { ...state, 
      summary: action.payload };
    default:
      return state;
  }
}
