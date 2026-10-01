import { z } from 'zod'

const signUpSchema = z.object({
 
  email: z
    .string()
    .min(1, { message: 'Email Address is Required' })
    .email({ message: 'Email is not right' }),

  password: z
    .string()
    .min(1, { message: 'Password is Required' })
    

})

export default signUpSchema