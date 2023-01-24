import "@styles/globals.css";
import font from "config/fonts";
import Navbar from "@components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
