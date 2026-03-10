import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexo Dubái - Multiplica Tu Patrimonio en 5 Días",
  description:
    "Evento exclusivo en Dubái para empresarios hispanohablantes. Aprende a pagar menos impuestos legalmente, invertir en real estate y crear empresa en Emiratos.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/nexodubai_icono.ico" }, { url: "/nexodubai_icono.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/nexodubai_icono.ico",
    apple: "/nexodubai_icono.ico",
  },
  openGraph: {
    title: "Nexo Dubái - Multiplica Tu Patrimonio en 5 Días",
    description: "Evento exclusivo en Dubái para empresarios hispanohablantes",
    url: "https://www.evento-nexodubai.com",
    siteName: "Nexo Dubai",
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M54TLB5S');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexo Dubai",
              url: "https://www.evento-nexodubai.com",
              logo: "https://www.evento-nexodubai.com/nexo-dubai-logo.png",
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M54TLB5S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
