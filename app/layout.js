import "./globals.css";
import { Inter, Sansita_Swashed } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export const swashed = Sansita_Swashed({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ben Bryant",
  description: "Avid learner and reflective developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="loader-container flex flex-col items-center">
          <div className="loader"></div>
          <p className="mt-4 text-xl text-blue-400">Loading...</p>
        </div>
        {children}
      </body>
    </html>
  );
}
