import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
      users {
        birthDate
        email
        id
        imageUrl
        name
        position
        projects {
          name
        }
        salary
        status
      }
  }
`;
