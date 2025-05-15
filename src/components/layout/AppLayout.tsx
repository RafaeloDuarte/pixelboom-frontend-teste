import type { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";
import { Toaster } from "sonner";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
          <Toaster position="bottom-right" duration={10000} />
        </main>
      </div>
    </div>
  )
}
