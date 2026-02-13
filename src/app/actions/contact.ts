"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const instagram = formData.get("instagram") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !instagram || !email) {
    return { error: "Por favor preencha todos os campos obrigatórios." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "AC Marketing <onboarding@resend.dev>",
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
      return { error: "Ocorreu um erro ao enviar o seu pedido. Tente novamente mais tarde." };
    }

    return { success: true };
  } catch (err) {
    console.error("Submission Error:", err);
    return { error: "Falha na conexão. Verifique a sua internet." };
  }
}
