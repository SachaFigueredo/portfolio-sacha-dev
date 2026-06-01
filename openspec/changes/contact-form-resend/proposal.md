# Proposal: Contact Form Funcional con Resend

## Intent

El formulario de contacto actual muestra "Mensaje enviado!" pero no envía nada real. Para monetizar el portfolio, cada lead necesita llegar a Sacha. Implementamos envío real de correos usando Resend + Server Action de Next.js.

## Scope

### In Scope
- Server Action que recibe el form y envía email vía Resend API
- Feedback visual (loading, success, error states)
- Variables de entorno para API key segura
- Config del proyecto para Resend SDK

### Out of Scope
- Base de datos (no necesitamos guardar leads aún)
- Sistema de templates HTML complejo
- Analytics de conversión
- i18n del formulario

## Capabilities

### New Capabilities
- `contact-form`: envío de emails desde formulario de contacto usando Resend API

### Modified Capabilities
- None

## Approach

1. Instalar `resend` SDK
2. Crear Server Action en `src/app/actions/contact.ts`
3. Conectar el formulario existente (`Contacto.tsx`) a la action
4. Agregar `.env.local` con `RESEND_API_KEY`
5. Mantener el mismo diseño y UX actual

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/Contacto.tsx` | Modified | Form conecta a server action real |
| `src/app/actions/contact.ts` | New | Server Action con Resend |
| `.env.example` | New | Template de variables de entorno |
| `package.json` | Modified | Dep `resend` agregada |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Resend API key expuesta | Low | `.env.local` en .gitignore, validación server-side |
| Form no funcional sin API key | Low | Mostrar error claro si no está configurado |

## Rollback Plan

- Revertir `Contacto.tsx` al estado actual (simulado)
- Eliminar `src/app/actions/contact.ts`
- `npm uninstall resend`

## Dependencies

- Cuenta gratis en [Resend](https://resend.com) (100 emails/día)
- API key de Resend en `.env.local`

## Success Criteria

- [ ] Formulario envía email a sachadev7@gmail.com con nombre, email y mensaje
- [ ] Loading state mientras envía
- [ ] Success state cuando llega el mail
- [ ] Error state si falla el envío
- [ ] Build de Next.js sin errores
