import { Poppins } from "next/font/google";

// Call the font loader function and assign it to a constant variable
const PoppinsFont = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Use the PoppinsFont variable */}
      <body className={PoppinsFont.className}>{children}</body>
    </html>
  );
}