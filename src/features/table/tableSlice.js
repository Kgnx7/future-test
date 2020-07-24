import { createSlice } from '@reduxjs/toolkit'
import { apiGetBigData, apiGetSmallData } from '../../api/dataAPI'

import { dataSchema } from './dataSchema'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        loading: false,
        data: [],
        error: null,
        isBigDataRequired: null,
    },
    reducers: {
        getDataStart: (state) => {
            state.loading = true
        },
        getDataFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        getDataSuccess: (state, { payload }) => {
            state.loading = false
            state.data = payload
        },
        setIsBigDataRequeired: (state, { payload }) => {
            state.isBigDataRequired = payload
        },
        resetData: (state) => {
            state.data = []
        },
        addItem: (state, { payload }) => {
            state.data = [...state.data, payload]
        },
    },
})

export const {
    getDataStart,
    getDataFailure,
    getDataSuccess,
    resetData,
    setIsBigDataRequeired,
    addItem,
} = tableSlice.actions

export const changeRequirement = (isBigDataRequired) => (dispatch) => {
    dispatch(setIsBigDataRequeired(isBigDataRequired))
}

export const addNewItem = (newItem) => (dispatch) => {
    try {
        dispatch(addItem(newItem))
    } catch (error) {
        // TODO: ДОБАВИТЬ функцию обработки ошибок
        // handleError(error, dispatch)
    }
}

export const getData = (isBigDataRequired) => async (dispatch) => {
    try {
        dispatch(getDataStart())

        const response = isBigDataRequired
            ? await apiGetBigData()
            : await apiGetSmallData()

        if (!Array.isArray(response.data)) {
            throw new Error(400)
        }

        for (let row of response.data) {
            if (!(await dataSchema.isValid(row))) {
                throw new Error(400)
            }
        }

        dispatch(getDataSuccess(response.data))
    } catch (error) {
        // TODO: ДОБАВИТЬ функцию обработки ошибок
        // handleError(error, dispatch)
        dispatch(getDataFailure(error))
    }
}

export const selectData = (state) => state.table.data

export default tableSlice.reducer
