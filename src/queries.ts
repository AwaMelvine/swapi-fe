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

export const GET_PERSON_BY_ID_QUERY = gql`
  query getPersonById($personId: Int) {
    personById(personId: $personId) {
      id
      image
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const SEARCH_PEOPLE_BY_NAME_QUERY = gql`
  query searchPeopleByName($name: String!) {
    searchPeople(name: $name) {
      id
      image
      name
      height
      mass
      gender
      homeworld
    }
  }
`;
