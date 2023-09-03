import { z } from "zod";

export const formSchema = z.object({
    email: z
    .string()
    .nonempty("o email é obrigatório")
    .email("forneça um email válido"),

    password: z
    .string()
    .nonempty("a senha é obrigatória"),
})