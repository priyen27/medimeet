import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMeet Doctor Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Toaster richColors />
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                  <div className="mb-4">
                    <p>
                      © {new Date().getFullYear()} <span className="font-semibold">MediMeet</span>. All rights reserved.
                    </p>
                  </div>
                  <div className="flex justify-center gap-6 flex-wrap">
                    <a href="/about" className="hover:underline">About</a>
                    {/* <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms of Service</a> */}
                  </div>
                  <div className="mt-6">
                    <p>Built with ❤️ using Next.js, shadcn/ui, Neon, Clerk & Vongue</p>
                  </div>
                </div>
              </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
