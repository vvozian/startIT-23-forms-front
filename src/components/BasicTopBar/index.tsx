import {PropsWithChildren, ReactNode} from "react";
import {Box, IconButton, Stack, Typography} from "@mui/material";

export interface IBasicTopBarAction {
    icon?: ReactNode;
    onClick?: () => void;
}

interface IBasicTopBar extends PropsWithChildren {
    leftAction?: IBasicTopBarAction;
    rightAction?: IBasicTopBarAction;
    title?: string;
}

export const BasicTopBar = (props: IBasicTopBar) => {
    return <Box width={1} py={2}>
        <Stack direction={"row"} justifyContent="space-between" alignItems="center">
            {props.leftAction && <IconButton edge="start" onClick={props.leftAction.onClick}>{props.leftAction.icon}</IconButton>}
            {props.title && <Typography variant="h6" width={1} textAlign="center">{props.title}</Typography>}
            {props.rightAction && <IconButton edge="end" onClick={props.rightAction.onClick}>{props.rightAction.icon}</IconButton>}
        </Stack>
    </Box>
}