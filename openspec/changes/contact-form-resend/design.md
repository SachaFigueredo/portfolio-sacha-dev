# Design: Contact Form Funcional con Resend

## Architecture

El formulario de contacto (`Contacto.tsx`, componente cliente) envía datos a una Server Action (`src/app/actions/contact.ts`) que usa el SDK de Resend para enviar un email a sachadev7@gmail.com.

## Flow

```
Usuario → Formulario (Contacto.tsx)
                ↓
        handleSubmit() — validación frontend
                ↓
        sendContactEmail(formData) — Server Action
                ↓
        Resend API → Email a sachadev7@gmail.com
                ↓
        { success: true } o { success: false, error }
                ↓
        UI: success / error states
```

## Server Action Details

- Archivo: `src/app/actions/contact.ts`
- Directiva `"use server"` — corre en el servidor
- Lee `RESEND_API_KEY` de `process.env`
- Valida campos requeridos (name, email, message)
- Usa `resend.emails.send()` con `from`, `to`, `replyTo`, `subject`, `text`
- Retorna `ActionResult { success, error? }`

## Security

- API key solo en servidor (nunca expuesta al cliente)
- Validación server-side además de client-side
- `.env.local` en `.gitignore` (ya configurado)

## Dependencies Added

- `resend` SDK
- `.env.example` para documentar la variable requerida
