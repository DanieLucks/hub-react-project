import { z } from "zod";

export const  formSchema = z.object({
    name: z
    .string()
    .nonempty("o nome é obrigatório")
    .min(3, "é necessário no minimo 3 letras"),

    email: z
    .string()
    .nonempty("o email é obrigatório")
    .email("forneça um email válido"),

    password: z
    .string()
    .nonempty("a senha é obrigatória")
    .min(8, "é necessário ter pelo menos 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),

    confirmPassword: z
    .string()
    .nonempty("é necessário validar a senha"),

    bio: z
    .string()
    .nonempty("é necessário escrever uma bio"),

    contact: z
    .string()
    .nonempty("o número para contato é obrigatório")
    .min(8, "é necessário pelo menos 8 dígitos"),

    course_module: z
    .string()
    .nonempty("o módulo do curso é obrigatório"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});