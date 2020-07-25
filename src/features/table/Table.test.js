import React from 'react'
import { rest } from 'msw'
import { Provider } from 'react-redux'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Milestone from './Milestone'
import bigData from '../../../bigData.json'
import smallData from '../../../smallData.json'

import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableSlice'

const store = configureStore({
    reducer: {
        table: tableReducer,
    },
})

const server = setupServer(
    rest.get('/Kgnx7/future-test/dev/smallData.json', (req, res, ctx) => {
        return res(ctx.json(smallData))
    }),
    rest.get('/Kgnx7/future-test/dev/bigData.json', (req, res, ctx) => {
        return res(ctx.json(bigData))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Загрузить немного данных', async () => {
    render(
        <Provider store={store}>
            <Milestone />
        </Provider>
    )

    fireEvent.click(screen.getByText('Небольшой набор данных 😐'))

    expect(screen.getByTestId('table')).toHaveTextContent(
        'Таблица с данными 😉'
    )

    await waitFor(() => {
        const tableRows = screen.getAllByTestId('tableRow')

        expect(tableRows).toHaveLength(10)
    })

    fireEvent.click(screen.getByText('<- Я передумал 🙄'))
})

test('Загрузить большие данные', async () => {
    render(
        <Provider store={store}>
            <Milestone />
        </Provider>
    )

    fireEvent.click(screen.getByText('Большой набор данных 🙀'))

    expect(screen.getByTestId('table')).toHaveTextContent(
        'Таблица с данными 😉'
    )

    await waitFor(() => {
        const tableRows = screen.getAllByTestId('tableRow')

        expect(tableRows).toHaveLength(10)
    })

    fireEvent.click(screen.getByText('<- Я передумал 🙄'))
})

test('Проверка пагинации', async () => {
    render(
        <Provider store={store}>
            <Milestone />
        </Provider>
    )

    fireEvent.click(screen.getByText('Большой набор данных 🙀'))

    expect(screen.getByTestId('table')).toHaveTextContent(
        'Таблица с данными 😉'
    )

    await waitFor(() => {
        const tableRows = screen.getAllByTestId('tableRow')

        expect(tableRows).toHaveLength(10)
    })

    for (let i = 0; i < 100; i++) {
        fireEvent.click(screen.getByTitle('Next page'))

        await waitFor(() => {
            const tableRows = screen.getAllByTestId('tableRow')

            expect(tableRows).toHaveLength(10)
        })
    }

    fireEvent.click(screen.getByText('<- Я передумал 🙄'))
})
