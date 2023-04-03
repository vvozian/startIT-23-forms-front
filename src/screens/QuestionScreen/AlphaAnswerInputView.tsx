import {Button, Stack, TextField} from "@mui/material";
import {useInternationalization} from "../../hooks/useInternationalization";
import {useState} from "react";

interface IProps {
    onSubmit: (value: string) => void
    onSkip: () => void
}

export const AlphaAnswerInputView = (props: IProps) => {
    const {i} = useInternationalization();

    const [value, setValue] = useState<string>('')

    return <Stack direction="column" spacing={1}>
        <TextField value={value} onChange={(e) => setValue(String(e.target.value))} size="small"
                   placeholder={i('noun:yourAnswer')}/>
        <Button variant="contained" onClick={() => props.onSubmit(value)}>{i('noun:next')}</Button>
        <Button variant="text" onClick={() => props.onSkip()}>{i('action:skipQuestion')}</Button>
    </Stack>
}