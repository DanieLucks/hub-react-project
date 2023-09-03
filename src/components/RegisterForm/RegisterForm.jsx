import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Input } from "../Input";
import { InputText } from "../Input/InputText";
import { InputSelect } from "../Input/InputSelect";
import "./RegisterForm.scss"

export const RegisterForm = ( { userRegister }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(formSchema)
    });

    const submit = (formData) => {
        userRegister(formData); 
        console.log(formData);
        reset();
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <div className="formHeader">
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
            </div>
            <Input label="Nome:" type="text" placeholder="Digite seu Nome" error={errors.name} {...register("name")} />

            <Input label="E-mail:" type="email" placeholder="Digite seu email" error={errors.email} {...register("email")} />

            <Input label="Senha:" type="password" placeholder="Digite uma senha" error={errors.password} {...register("password")} />

            <Input label="Confirmar Senha:" type="password" placeholder="Digite sua senha novamente" error={errors.confirmPassword} {...register("confirmPassword")}/>

            <InputText label="Bio:" placeholder="Fale sobre você" error={errors.bio} {...register("bio")} />

            <Input label="Contato:" type="text"  placeholder="Opção de contato" error={errors.contact} {...register("contact")}/>
            
            <InputSelect label="Selecionar módulo:" error={errors.course_module} {...register("course_module")}>
                <option value="">Selecione um módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo - Introdução ao Frontend</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo - Frontend Avançado</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo - Introdução ao Backend</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo - Backend Avançado</option>
            </InputSelect>
            
            <button className="button_secundary" type="submit">Cadastrar</button>
        </form>
    )
}