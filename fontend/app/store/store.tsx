import { configureStore } from "@reduxjs/toolkit";
import studentslices from "./slices/studentslices";
import teacherslices from "./slices/teacherslices";
const store = configureStore({
    reducer: {
        student: studentslices,
        teacher: teacherslices,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;