"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Check, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

/*
  ========================================
  CONTACTO - Diseño premium
  ========================================
  Formulario limpio y efectivo
*/

interface ContactoProps {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  tiktok: string;
  whatsapp: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contacto({ email, github, linkedin, instagram, tiktok, whatsapp }: ContactoProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 4000);
    } else {
      setSubmitError(result.error || "Error al enviar el mensaje.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contacto"
      className="py-32 bg-[#0a0a0f]"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Hablemos
          </h2>
          <p className="text-gray-500 mt-4">
             Respondo rápido. Sin compromiso.
          </p>
        </motion.div>

        {/* Contact options - 5 cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 p-3 rounded-xl bg-[#12121a] border border-white/5 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Mail size={16} className="text-blue-400" />
            </div>
            <div className="text-xs min-w-0">
              <div className="text-gray-500">Email</div>
              <div className="text-white group-hover:text-blue-400 transition-colors truncate">{email}</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-xl bg-[#12121a] border border-white/5 hover:border-green-500/50 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <MessageCircle size={16} className="text-green-400" />
            </div>
            <div className="text-xs">
              <div className="text-gray-500">WhatsApp</div>
              <div className="text-white group-hover:text-green-400 transition-colors">WhatsApp</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-xl bg-[#12121a] border border-white/5 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <svg height="16" width="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.627-2-6.271-5.5-6.271-2.5 0-4 2.022-4 4.25v5.625h-3v-11h3v1.615c1.182-1.837 3.072-2.915 5.5-2.915 1.637 0 2.914.575 3.5 1.478v1.867z"/>
              </svg>
            </div>
            <div className="text-xs">
              <div className="text-gray-500">LinkedIn</div>
              <div className="text-white group-hover:text-blue-400 transition-colors">LinkedIn</div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-xl bg-[#12121a] border border-white/5 hover:border-pink-500/50 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
              <svg height="16" width="16" viewBox="0 0 24 24" fill="currentColor" className="text-pink-400">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.285c-.598 0-1.079.481-1.079 1.079s.481 1.079 1.079 1.079c.597 0 1.078-.481 1.078-1.079s-.481-1.079-1.078-1.079z"/>
              </svg>
            </div>
            <div className="text-xs">
              <div className="text-gray-500">Instagram</div>
              <div className="text-white group-hover:text-pink-400 transition-colors">Instagram</div>
            </div>
          </a>

          {/* TikTok */}
          <a
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-xl bg-[#12121a] border border-white/5 hover:border-cyan-500/50 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <svg height="16" width="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.37-4.81 2.51 2.51 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-3.48v-7a8.16 8.16 0 0 0 4.77 1.45v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <div className="text-xs">
              <div className="text-gray-500">TikTok</div>
              <div className="text-white group-hover:text-cyan-400 transition-colors">TikTok</div>
            </div>
          </a>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-600"
              />
              <input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-600"
              />
            </div>

            <textarea
              placeholder="Cuenta tu proyecto en pocas palabras"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : submitSuccess ? (
                <>
                  <Check size={20} />
                  Mensaje enviado!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensaje
                </>
              )}
            </button>

            {submitSuccess && (
              <p className="text-center text-green-400 text-sm">
                Gracias! Te respondo lo antes posible.
              </p>
            )}

            {submitError && (
              <p className="text-center text-red-400 text-sm flex items-center justify-center gap-2">
                <AlertCircle size={14} />
                {submitError}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}