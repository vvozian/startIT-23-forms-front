import {BasicTopBar, IBasicTopBarAction} from "../../components/BasicTopBar";
import {Container, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useInternationalization} from "../../hooks/useInternationalization";
import {useNavigation} from "../../hooks/useNavigation";
import {useMutation, useQuery} from "@apollo/client";
import {GET_QUESTION} from "./queries";
import {ANSWER_ALPHA_QUESTION, ANSWER_BOOL_QUESTION, ANSWER_NUMERIC_QUESTION} from "./mutations";
import {BooleanAnswerInputView} from "./BooleanAnswerInputView";
import {useCallback} from "react";
import {NumericAnswerInputView} from "./NumericAnswerInputView";
import {AlphaAnswerInputView} from "./AlphaAnswerInputView";
import {LoadingOverlay} from "../../components/LoadingOverlay";

export const QuestionScreen = () => {
    const {i} = useInternationalization();
    const {goToScreen, params: {formProcessId, questionId}} = useNavigation();

    const {data, loading} = useQuery(GET_QUESTION, {variables: {id: questionId}});

    const [answerBoolQuestionMutation, {loading: submittingBoolAnswer}] = useMutation(ANSWER_BOOL_QUESTION)
    const [answerNumericQuestionMutation, {loading: submittingNumericAnswer}] = useMutation(ANSWER_NUMERIC_QUESTION)
    const [answerAlphaQuestionMutation, {loading: submittingAlphaAnswer}] = useMutation(ANSWER_ALPHA_QUESTION)

    const answerBoolQuestion = useCallback((answer: boolean) => {
        answerBoolQuestionMutation({variables: {answer, questionId, activeFormId: formProcessId}}).then(r => {

            if (!r.data?.answerBooleanQuestion) return;
            if (r.data.answerBooleanQuestion.hasNextQuestion) goToScreen('question', {
                formProcessId,
                questionId: r.data.answerBooleanQuestion.nextQuestionId
            })
            else goToScreen('completedForm', {})
        })
    }, [answerBoolQuestionMutation, questionId])

    const answerNumericQuestion = useCallback((answer: number) => {
        answerNumericQuestionMutation({variables: {answer, questionId, activeFormId: formProcessId}}).then(r => {

            if (!r.data?.answerNumericQuestion) return;
            if (r.data.answerNumericQuestion.hasNextQuestion) goToScreen('question', {
                formProcessId,
                questionId: r.data.answerNumericQuestion.nextQuestionId
            })
            else goToScreen('completedForm', {})
        })
    }, [answerNumericQuestionMutation, questionId])

    const answerAlphaQuestion = useCallback((answer: string) => {
        answerAlphaQuestionMutation({variables: {answer, questionId, activeFormId: formProcessId}}).then(r => {

            if (!r.data?.answerAlphaQuestion) return;
            if (r.data.answerAlphaQuestion.hasNextQuestion) goToScreen('question', {
                formProcessId,
                questionId: r.data.answerAlphaQuestion.nextQuestionId
            })
            else goToScreen('completedForm', {})
        })
    }, [answerAlphaQuestionMutation, questionId])

    const goBackAction: IBasicTopBarAction = {
        icon: <ArrowBackIcon/>,
        onClick: () => goToScreen('activeForm', {formProcessId})
    }

    const infoAction: IBasicTopBarAction = {
        icon: <InfoOutlinedIcon/>,
        onClick: () => console.log(">>> help")
    }

    if (submittingBoolAnswer || submittingAlphaAnswer || submittingNumericAnswer || loading) return <LoadingOverlay/>

    return <Container>
        <Stack direction="column" justifyContent="space-between" spacing={2} minHeight="100vh" pb={2}>
            <BasicTopBar leftAction={goBackAction} rightAction={infoAction} title={"28%"}/>
            <Typography>{data?.question?.content}</Typography>
            {data?.question?.answerType === 'BOOL' &&
                <BooleanAnswerInputView onSubmit={(value) => answerBoolQuestion(value)} onSkip={() => null}/>}
            {data?.question?.answerType === 'NUMERIC' &&
                <NumericAnswerInputView onSubmit={(value) => answerNumericQuestion(value)} onSkip={() => null}/>}
            {data?.question?.answerType === 'ALPHA' &&
                <AlphaAnswerInputView onSubmit={(value) => answerAlphaQuestion(value)} onSkip={() => null}/>}
        </Stack>
    </Container>
}