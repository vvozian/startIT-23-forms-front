import {gql} from "@apollo/client";

export const GET_ALL_FORMS = gql`
    query {
        allForms {
            id
            formId
            subtitle
            title
            __typename
        }
    }
`;

export const GET_ACTIVE_FORMS = gql`
    query  {
        activeForms {
            id
            form {
                id
                formId
                subtitle
                title
            }
            progress
        }
    }
`

export const GET_ACTIVE_FORM = gql`
    query activeForm($id: ID) {
        activeForm(id: $id) {
            id
            form {
                id
                formId
                subtitle
                title
            }
            progress
            nextQuestionId
        }
    }
`

export const GET_ARCHIVED_FORMS = gql`
    query {
        archivedForms {
            id
            downloadLink
            form {
                id
                title
                formId
                subtitle
            }
        }
    }
`