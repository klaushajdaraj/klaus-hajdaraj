import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Klaus Hajdaraj - Data Scientist Portfolio",
  description: "Interactive AI-powered portfolio terminal showcasing Klaus Hajdaraj's work as a Data Scientist",
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4D03AQFtzpPRo2IgEQ/profile-displayphoto-shrink_800_800/B4DZcqwyDnGYAg-/0/1748769121436?e=1756339200&v=beta&t=GEZIWfAqu49k9lLzifwhRvXmYwXMoJZzAZDfIsyVipo",
    apple: "https://media.licdn.com/dms/image/v2/D4D03AQFtzpPRo2IgEQ/profile-displayphoto-shrink_800_800/B4DZcqwyDnGYAg-/0/1748769121436?e=1756339200&v=beta&t=GEZIWfAqu49k9lLzifwhRvXmYwXMoJZzAZDfIsyVipo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://media.licdn.com/dms/image/v2/D4D03AQFtzpPRo2IgEQ/profile-displayphoto-shrink_800_800/B4DZcqwyDnGYAg-/0/1748769121436?e=1756339200&v=beta&t=GEZIWfAqu49k9lLzifwhRvXmYwXMoJZzAZDfIsyVipo" />
        <link rel="apple-touch-icon" href="https://media.licdn.com/dms/image/v2/D4D03AQFtzpPRo2IgEQ/profile-displayphoto-shrink_800_800/B4DZcqwyDnGYAg-/0/1748769121436?e=1756339200&v=beta&t=GEZIWfAqu49k9lLzifwhRvXmYwXMoJZzAZDfIsyVipo" />
      </head>
      <body className="font-mono">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
