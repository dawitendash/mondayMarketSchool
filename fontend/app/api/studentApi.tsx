import { studentSchema } from "../schema/studentSchema";

export interface studentProps {
    fullname: string,
    class: string,
    section: string,
    status: string,
}
//create student api
export const createStudentApi = async (newStudent: studentProps) => {
    const validData = studentSchema.safeParse(newStudent);
    if (!validData.success) {
        return { error: "Invalid Field !!" }
    } else {
        const response = await fetch('http://localhost:8000/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        });
        if (!response.ok) {
            throw new Error("Failed to create a new students")
        }
        const data = await response.json();
        return data;
    }

}

//fetch student
export const FetchStudent = async () => {
    const response = await fetch('http://localhost:8000/api/students');
    if (!response.ok) {
        throw new Error('Failed to fetch the student data');
    }
    const data = await response.json();
    console.log(data[0]);
    return data;

}