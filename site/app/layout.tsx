import "@styles/globals.css";
import font from "config/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
