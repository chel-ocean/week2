import "./globals.css";

export const metadata = {
  title: "Web Dev Week 2 Demo",
  description: "Demo for Web Dev 2 Week 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
