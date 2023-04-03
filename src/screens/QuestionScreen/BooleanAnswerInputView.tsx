import {Button, Stack} from "@mui/material";
import {useInternationalization} from "../../hooks/useInternationalization";

interface IProps {
    onSubmit: (value: boolean) => void
    onSkip: () => void
}

export const BooleanAnswerInputView = (props: IProps) => {
    const {i} = useInternationalization();


    return <Stack direction="column" spacing={1}>
        <Button variant="contained" onClick={() => props.onSubmit(false)}>{i('noun:no')}</Button>
        <Button variant="contained" onClick={() => props.onSubmit(true)}>{i('noun:yes')}</Button>
        <Button variant="text" onClick={() => props.onSkip()}>{i('action:skipQuestion')}</Button>
    </Stack>
}