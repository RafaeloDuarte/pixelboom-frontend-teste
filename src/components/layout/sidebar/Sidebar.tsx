import {
  Activity,
  User,
  FileCheck,
  Settings,
  Headset,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { BranchSelector } from "@/components/branch-selector/BranchSelector"

const menu = [
  { label: "Dashboard", icon: Activity },
  { label: "Usuários", icon: User },
  { label: "Documentos", icon: FileCheck },
]

export function Sidebar() {
  return (
    <aside className="w-60 max-w-[240px] border-r flex flex-col gap-0">
      <div className="w-60 h-[72px] flex items-center border-b p-6 flex gap-2">
        <button className="w-[96px] h-8 flex items-center justify-center gap-2 rounded-[8px] bg-primary text-primary-foreground">
          <span className="text-xs font-bold leading-none tracking-[-0.24px] font-sans">
            Logo
          </span>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <BranchSelector />

          <div className="w-[208px] h-[254px] flex flex-col gap-[6px]">
            <div className="w-[208px] h-8 flex items-center justify-between rounded-md opacity-70 px-2">
              <span className="text-xs font-normal leading-4 tracking-[-0.4px] font-sans">
                Menu
              </span>
            </div>

            <nav className="w-[208px] h-[254px] flex flex-col gap-[6px]">
              {menu.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-full cursor-pointer",
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
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex justify-between items-center w-[208px] h-[40px] rounded-full px-4">
            <span className="font-sans font-normal text-sm leading-5 tracking-[-0.4px]">
              Precisa de ajuda?
            </span>
            <Headset className="w-4 h-4" />
          </div>
        </div>
      </div>
    </aside>
  )
}
