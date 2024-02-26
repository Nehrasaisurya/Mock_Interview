import Sidebar from "@/components/Sidebar";
import Top from "@/components/Top";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Top />
        <main className="pl-28 pr-10 pt-24 pb-10 bg-[#F3F4F6] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
