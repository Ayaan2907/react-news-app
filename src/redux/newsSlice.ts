import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news : {}
    },
    reducers: {
        updateNews: (state, action) => {
            state.news = action.payload;
        }
    }
});

export const newsReducer = newsSlice.reducer;
export const { updateNews } = newsSlice.actions;
