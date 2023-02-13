import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Axios from "axios";

export const getGoals = createAsyncThunk('goals/get', async (thunkAPI) => {
    // try {
        const response = await Axios.get('/goals');
        return response.data;
    // } catch (error) {
    //     const {rejectWithValue} = thunkAPI;
    //     return rejectWithValue(error.response.data)
    // }
})

const initialGoalsState = {
    goalsList: [],
    loading: 'idle',
    error: null
}

const GoalsSlice = createSlice({
    name: 'goals',
    initialState: initialGoalsState,
    reducers: {},
    extraReducers: {
        [getGoals.pending] : (state) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        [getGoals.fulfilled] : (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.goalsList = action.payload;
            }
        },
        [getGoals.rejected] : (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.error = action.error;
            }
        }
    }
})

export default GoalsSlice.reducer;