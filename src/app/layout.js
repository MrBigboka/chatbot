import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Démo SOFIA | Gestrago",
  description: "Créer par SmartScaling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/737e0698-814f-44b4-b08e-e2240bfbeeb5/webchat/v2.1/config.js"></script>
      </body>    
    </html>
  );
}
