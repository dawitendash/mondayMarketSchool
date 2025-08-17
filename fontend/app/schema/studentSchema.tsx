import * as z from 'zod';
export const studentSchema = z.object({
    fullname: z.string().nonempty({ message: ' fullname is required' }),
    class: z.string().nonempty({ message: 'class is required' }),
    section: z.string().nonempty({ message: 'section is required' }),
    status: z.string().nonempty({ message: 'status is required' }),
})