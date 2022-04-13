/* eslint-disable no-restricted-globals */
import { render, screen } from "@testing-library/react"
import Header from "./Header";
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line no-undef
test('On initial render, Header is rendered', () => {
    render(
        <Header />, { wrapper: MemoryRouter }
    )
    screen.debug()
})