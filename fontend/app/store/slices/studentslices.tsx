import { createStudentApi, FetchStudent, studentProps } from '@/app/api/studentApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//fetch a student 
export const fetchStudent = createAsyncThunk('student/fetch', async () => {
    return FetchStudent();
});

//delete student by id 
// export const deleteStudent = createAsyncThunk('user/updateUser',
//     async (id: any) => {
//         return DeleteStudentApi(id);
//     })


//create a new student
export const createStudent = createAsyncThunk('student/create', async (newStudent: studentProps) => {
    return await createStudentApi(newStudent);
})
const initialState = {
    studentData: [],
    loading: false,
    error: '',
};
const studentslices = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder //fetch a student
            .addCase(fetchStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.studentData = action.payload;
            })
            .addCase(fetchStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })//create a new student
            .addCase(createStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(createStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.studentData = action.payload;
            })
            .addCase(createStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong"
            })//delete a Student by id 
        // .addCase(deleteStudent.pending, (state) => {
        //     state.loading = true;
        // }).addCase(DeleteStudent.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.StudentData = action.payload;
        // }).addCase(DeleteStudent.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message || "Something went wrong"
        // })
    },
});
export default studentslices.reducer;
