import NavBar from "@/components/NavBar";
import AuthProvider from "@/components/SessionProvider"; // Import the wrapper

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <main className="font-work-sans">
        <NavBar />
        {children}
      </main>
    </AuthProvider>
  );
}
