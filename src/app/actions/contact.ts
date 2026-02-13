"use server";

import { Resend } from "resend";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const instagram = formData.get("instagram") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !instagram || !email) {
    return { error: "Por favor preencha todos os campos obrigatórios." };
  }

  // 1. Verificar se a API Key existe
  if (!process.env.RESEND_API_KEY) {
    console.error("ERRO CRÍTICO: RESEND_API_KEY não configurada no Vercel.");
    return { error: "O serviço de e-mail não está configurado. Por favor, contacte o suporte." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: "LeadPulsePT <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL || "ricardo.souzamarques@verisure.pt"],
      subject: `Novo Lead: ${name}`,
      html: `
        <h2>Novo Pedido de Reunião Estratégica</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Instagram:</strong> ${instagram}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message || "Nenhuma mensagem fornecida."}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Ocorreu um erro ao enviar o teu pedido. Tenta novamente mais tarde." };
    }

    return { success: true };
  } catch (err) {
    console.error("Submission Error:", err);
    return { error: "Falha na ligação ao servidor. Tenta novamente." };
  }
}
