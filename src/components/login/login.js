import { LoginService } from './loginService'
import { LoginView } from './loginView'

export function Login() {
    const loginService = React.useMemo(() => {
        return new LoginService()
    }, [])
    const [username, setUsername] = React.useState()
    const [password, setPassword] = React.useState()
    const handleChangePassword = React.useCallback((event) => {
        setPassword(event.target.value)
    }, [])
    const handleChangeUsername = React.useCallback((event) => {
        setUsername(event.target.value)
    }, [])
    const handleSubmit = React.useCallback(
        (event) => {
            event.preventDefault()
            loginService({ username, password })
        },
        [username, password, loginService],
    )

    return (
        <LoginView
            username={username}
            password={password}
            onChangePassword={handleChangePassword}
            onChangeUsername={handleChangeUsername}
            onSubmit={handleSubmit}
        />
    )
}
