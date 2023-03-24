import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = { 
    user: user ? user: null,
    error: false,
    success: false,
    loading: false,
}


//register -> signin
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {

    const data = await authService.register(user);

    if(data.errors){
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
})

export const teste = createAsyncThunk("auth/teste", async() => {
    console.log("action...");
})

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.user = action.payload;
        }).addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        }).addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.user = null;
        }).addCase(teste.fulfilled, (state) => {
            state.loading = "estado_fullfilled";
            state.error = "estado_fullfilled";
            state.success = "estado_fullfilled";
        })
        .addCase(teste.pending, (state) => {
            state.loading = "estado_pending";
            state.error = "estado_pending";
            state.success = "estado_pending";
        })
    }
})

export const { reset } = authSlice.actions;

export default authSlice.reducer;