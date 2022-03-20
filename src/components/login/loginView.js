import { TextField, Box, Button } from '@mui/material'

const propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onChangeUsername: PropTypes.func,
    onChangePassword: PropTypes.func,
    onSubmit: PropTypes.func,
}

export function LoginView({ username, password, onChangeUsername, onChangePassword, onSubmit }) {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box component="form" onSubmit={onSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    value={username}
                    onChange={onChangeUsername}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
            </Box>
        </Box>
    )
}

LoginView.propTypes = propTypes
