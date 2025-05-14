import {
    LayoutDashboard,
    Users2,
    FileText,
    Settings,
  } from "lucide-react"
  import { cn } from "@/lib/utils"
  
  const menu = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Usuários", icon: Users2 },
    { label: "Documentos", icon: FileText },
  ]
  
  export function Sidebar() {
    return (
      <aside className="w-64 h-screen border-r bg-white flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <button className="bg-black text-white font-semibold px-3 py-1 rounded">Logo</button>
        </div>
  
        <div className="px-4 pb-2 text-sm text-muted-foreground font-medium">Filial A</div>
  
        <nav className="flex-1 px-2 space-y-2">
          {menu.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md cursor-pointer",
                item.label === "Usuários"
                  ? "bg-black text-white"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
          <div className="pt-6 px-2 text-sm text-muted-foreground">Configurações</div>
          <div className="flex items-center gap-3 p-2 text-muted-foreground hover:bg-muted rounded-md cursor-pointer">
            <Settings className="w-4 h-4" />
            Geral
          </div>
        </nav>
      </aside>
    )
  }
  