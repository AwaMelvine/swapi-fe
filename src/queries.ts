import { gql } from "@apollo/client";

export const GET_PEOPLE_PAGE_QUERY = gql`
  query getPeoplePage($currentPage: Int) {
    peoplePage(currentPage: $currentPage) {
      nextPage
      prevPage
      count
      total
      people {
        id
        image
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;
