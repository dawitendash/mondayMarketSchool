import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    teacherData: [],
    loading: false,
    error: ''
}
const teacherslices = createSlice({
    name: 'teacher',
    initialState,
    reducers: {}


})

export default teacherslices.reducer;