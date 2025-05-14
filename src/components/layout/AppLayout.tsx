import type { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto bg-muted">
          {children}
        </main>
      </div>
    </div>
  )
}
