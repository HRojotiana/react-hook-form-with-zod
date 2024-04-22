"use client"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { handleMyFormSubmit } from "../actions";


export const myFormSchema = z.object({
    name: z.string(),
    telephone: z.string().min(10).max(10),
    email: z.string().email(),
    message: z.string().min(5)
});

export type MyFormFields = z.infer<typeof myFormSchema>;

export default function MyForm() {
    const form = useForm<MyFormFields>({
        resolver: zodResolver(myFormSchema),
        defaultValues: {
            name: "",
            telephone: "",
            email: "",
            message: "",
        },
    });

    const onMyFormSubmit = async (data: MyFormFields) => {
        await handleMyFormSubmit(data);
    }

    return (
        <form onSubmit={form.handleSubmit((data) => onMyFormSubmit(data))}>
            <div>
                <label>Name</label>
                <input {...form.register("name")} />
            </div>
            <div>
                <label>Telephone</label>
                <input {...form.register("telephone")} />
            </div>
            <div>
                <label>Email</label>
                <input {...form.register("email")} />
            </div>
            <div>
                <label>Message</label>
                <input {...form.register("message")} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}