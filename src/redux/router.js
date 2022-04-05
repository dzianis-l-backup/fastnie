import { Todos } from './todos'
import { Details } from './details/details'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todos />} />
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
