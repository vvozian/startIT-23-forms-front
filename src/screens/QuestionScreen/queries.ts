import {gql} from "@apollo/client";

export const GET_QUESTION = gql`
    query questionById($id: ID) {
        question(id: $id) {
            id
            content
            answerType
            __typename
        }
    }
`