import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, message, honeypot } = data;

  if (honeypot) {
    return NextResponse.json({ error: 'Bot detectado' }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos incompletos' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'secaudeas@gmail.com',
      subject: `Contacto desde la Web de AUDEAS`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      status: 'Mensaje enviado correctamente',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error enviando el mensaje' },
      { status: 500 },
    );
  }
}
