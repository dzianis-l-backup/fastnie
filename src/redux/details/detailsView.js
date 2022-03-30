import { Typography, Box } from '@mui/material'

const propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
}

export function DetailsView({ todo }) {
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

DetailsView.propTypes = propTypes
