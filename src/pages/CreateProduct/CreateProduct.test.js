import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../../store"
import CreateProduct from "./CreateProduct"

import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

test('On initial render, the create button is enabled', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CreateProduct />
            </BrowserRouter>
        </Provider>
    )

    expect(screen.getByRole('button', { name: /create/i })).toBeEnabled()
})