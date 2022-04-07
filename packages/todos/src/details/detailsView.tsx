import { Typography, Box } from '@mui/material'
import { Todo } from '../store'

export function DetailsView({ todo }: { todo: Todo }) {
    const { text } = todo

    return (
        <Box>
            <Typography variant="h1" component="h1">
                &#9999; Details
            </Typography>
            <Typography variant="body1">{text}</Typography>
        </Box>
    )
}
