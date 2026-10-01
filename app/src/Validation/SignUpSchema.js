import { z } from 'zod'

const signUpSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is Required' }),
  lastName: z.string().min(1, { message: 'Last Name is Required' }),
  phone: z.string().min(1, { message: 'Phone number is Required' })
  .regex(/^01[0125][0-9]{8}/,{message:"InValid Phone Number"}),
  email: z
    .string()
    .min(1, { message: 'Email Address is Required' })
    .email({ message: 'Email is not right' }),

  password: z
    .string()
    .min(1, { message: 'Password is Required' })
    .regex(/[A-Z]{2}/, { message: 'Enter 2 Capital letters' })
    .regex(/[0-9]{3}/, { message: 'Enter 3 Numbers' })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]/, { message: 'Enter Special Character' })
    .min(8, { message: 'Password must be 8 characters or more' }),

  confirmPassword: z.string().min(1, { message: 'Confirm Password is Required' }),
  gender: z.string().min(1, { message: 'Gender is Required' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export default signUpSchema