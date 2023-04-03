import {gql} from "@apollo/client";

export const ANSWER_BOOL_QUESTION = gql`
 mutation answerBoolQuestion($activeFormId: ID, $questionId: ID, $answer: Boolean) {
     answerBooleanQuestion(activeFormId: $activeFormId, questionId: $questionId, answer: $answer) {
         hasNextQuestion
         nextQuestionId
     }
 }  
`

export const ANSWER_ALPHA_QUESTION = gql`
    mutation answerAlphaQuestion($activeFormId: ID, $questionId: ID, $answer: String) {
        answerAlphaQuestion(activeFormId: $activeFormId, questionId: $questionId, answer: $answer) {
            hasNextQuestion
            nextQuestionId
        }
    }
`

export const ANSWER_NUMERIC_QUESTION = gql`
    mutation answerNumericQuestion($activeFormId: ID, $questionId: ID, $answer: Int) {
        answerNumericQuestion(activeFormId: $activeFormId, questionId: $questionId, answer: $answer) {
            hasNextQuestion
            nextQuestionId
        }
    }
`