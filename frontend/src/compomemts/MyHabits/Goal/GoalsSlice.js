import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const getGoals = createAsyncThunk

const initialGoalsState = {
    goalsList: [],
    loading: 'idle',
    error: null
}

const GoalsSlice = createSlice({
    name: 'goals',
    initialState: initialGoalsState,
    reducers: {},
    extraReducers: {}
})

export default GoalsSlice.reducer;