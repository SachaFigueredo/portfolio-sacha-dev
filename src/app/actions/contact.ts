"use server";

import { Resend } from "resend";

/*
  ========================================
  CONTACT SERVER ACTION
  ========================================
  Server Action that receives contact form data and sends an email via Resend.
  Requires RESEND_API_KEY in .env.local.
  Powered by Resend: https://resend.com
*/

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
  // Validate required fields
  if (!data.name?.trim()) {
    return { success: false, error: "El nombre es obligatorio." };
  }
  if (!data.email?.trim()) {
    return { success: false, error: "El email es obligatorio." };
  }
  if (!data.message?.trim()) {
    return { success: false, error: "El mensaje es obligatorio." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada en .env.local");
    return {
      success: false,
      error: "Error de configuración del servidor. Contactame directamente por WhatsApp o email.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "sachadev7@gmail.com",
      replyTo: data.email,
      subject: `Nuevo contacto de ${data.name} — Portfolio`,
      text: `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error al enviar email desde el portfolio:", error);
    return {
      success: false,
      error: "No se pudo enviar el mensaje. Intentalo de nuevo o escribime directo a sachadev7@gmail.com.",
    };
  }
}
