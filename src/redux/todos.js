import { TodosView } from './todosView'
import { Details } from './details/details'
import { fetchTodos } from './todosReducers'
import { useActions } from './todosHooks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'

export function Todos() {
    const { fetchTodos: _fetchTodos } = useActions({ fetchTodos })

    React.useEffect(() => {
        _fetchTodos()
    }, [_fetchTodos])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodosView />} />
                <Route
                    path="/details"
                    exact
                    element={
                        <Typography component="h1" variant="h1">
                            Todos Details
                        </Typography>
                    }
                ></Route>
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}
