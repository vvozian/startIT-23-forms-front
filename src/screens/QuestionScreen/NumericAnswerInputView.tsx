import {Button, Stack, TextField} from "@mui/material";
import {useInternationalization} from "../../hooks/useInternationalization";
import {useState} from "react";

interface IProps {
    onSubmit: (value: number) => void
    onSkip: () => void
}

export const NumericAnswerInputView = (props: IProps) => {
    const {i} = useInternationalization();

    const [value, setValue] = useState<number>(0)

    return <Stack direction="column" spacing={1}>
        <TextField type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} size="small"
                   placeholder={i('noun:yourAnswer')}/>
        <Button variant="contained" onClick={() => props.onSubmit(value)}>{i('noun:next')}</Button>
        <Button variant="text" onClick={() => props.onSkip()}>{i('action:skipQuestion')}</Button>
    </Stack>
}