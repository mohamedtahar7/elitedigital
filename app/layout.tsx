import "./globals.css";

export const metadata = {
  title: "EliteDigital – Fast, Modern Websites for Your Business",
  description:
    "EliteDigital specializes in building responsive, professional websites for Algerian businesses that want to stand out, attract clients, and grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
