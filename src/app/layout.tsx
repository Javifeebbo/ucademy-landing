import type { Metadata } from "next";
import { Poppins, Besley } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-besley",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ucademy | La academia online para conquistar tu futuro — Oposiciones, Universidad y FP",
  description:
    "Opositores, futuros universitarios y FP. Una ruta clara, un método que funciona. Plan personalizado, tutores en activo y acompañamiento real. Sin humo, sin pérdidas de tiempo.",
  metadataBase: new URL("https://ucademy-landing.vercel.app"),
  openGraph: {
    title: "Ucademy — Educación salvaje para la vida real",
    description:
      "Oposiciones, universidad o FP. Miles de alumnos ya trazan su ruta con nosotros. ¿Y tú?",
    type: "website",
    locale: "es_ES",
    siteName: "Ucademy",
    images: [{ url: "/images/og-ucademy.webp", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${poppins.variable} ${besley.variable}`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
