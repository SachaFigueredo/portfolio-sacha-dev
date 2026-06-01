# Tasks: Contact Form Funcional con Resend

## 1. Setup

- [x] Instalar `resend` SDK

## 2. Server Action

- [x] Crear `src/app/actions/contact.ts` con:
  - Server Action `sendContactEmail`
  - Validación de campos
  - Envío via Resend API
  - Manejo de errores

## 3. Frontend

- [x] Conectar `Contacto.tsx` a la Server Action
- [x] Agregar estado `submitError` para errores reales
- [x] Mostrar error en UI cuando falle el envío
- [x] Mantener success state cuando funcione

## 4. Config

- [x] Crear `.env.example` con `RESEND_API_KEY`

## 5. Verification

- [x] `npm run build` pasa sin errores
- [ ] Crear cuenta en Resend y agregar API key a `.env.local`
- [ ] Probar envío de email real
