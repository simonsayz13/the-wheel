import "./styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Fortune Wheel",
  description: "Spin the wheel to pick a random name",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className=" flex justify-center items-center">
        <main className="w-full max-w-xl p-6 rounded">{children}</main>
      </body>
    </html>
  );
}
