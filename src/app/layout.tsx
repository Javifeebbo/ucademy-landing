import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ucademy | La academia online para conquistar tu futuro — Oposiciones, Universidad y FP",
  description:
    "Opositores, futuros universitarios y FP. Una ruta clara, un método que funciona. Plan personalizado, tutores en activo y acompañamiento real. Sin humo, sin pérdidas de tiempo.",
  openGraph: {
    title: "Ucademy — Educación salvaje para la vida real",
    description:
      "Oposiciones, universidad o FP. Miles de alumnos ya trazan su ruta con nosotros. ¿Y tú?",
    type: "website",
    locale: "es_ES",
    siteName: "Ucademy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
