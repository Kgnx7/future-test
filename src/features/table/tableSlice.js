import { createSlice } from '@reduxjs/toolkit'
import { apiGetBigData, apiGetSmallData } from '../../api/dataAPI'

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
    },
})

export const {
    getDataStart,
    getDataFailure,
    getDataSuccess,
    resetData,
    setIsBigDataRequeired,
} = tableSlice.actions

export const changeRequirement = (isBigDataRequired) => (dispatch) => {
    dispatch(setIsBigDataRequeired(isBigDataRequired))
}

export const getData = (isBigDataRequired) => async (dispatch) => {
    try {
        dispatch(getDataStart())

        const response = isBigDataRequired
            ? await apiGetBigData()
            : await apiGetSmallData()

        dispatch(getDataSuccess(response.data))
    } catch (error) {
        // TODO: ДОБАВИТЬ функцию обработки ошибок
        // handleError(error, dispatch)
        dispatch(getDataFailure(error))
    }
}

export const selectData = (state) => state.table.data

export default tableSlice.reducer
