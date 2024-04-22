"use client";

import { MyFormFields } from "./my-form/page";

export function handleMyFormSubmit(data: MyFormFields){
  console.log({name: data.name, telephone: data.telephone, email: data.email, message: data.message});
  
}