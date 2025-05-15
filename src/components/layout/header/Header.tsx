import { CircleHelp, Bell, PanelLeftClose } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="w-full h-[72px] border-b flex items-center justify-between px-6 bg-white">
      <div className="w-10 h-10 flex items-center justify-center gap-3">
        <PanelLeftClose className="w-10 h-10 flex items-center justify-center gap-2 rounded-full p-3 opacity-75" />
      </div>
      <div className="w-[144px] flex items-center gap-3">
        <CircleHelp className="w-10 h-10 flex items-center justify-center gap-2 rounded-full p-3 border" />
        <Bell className="w-10 h-10 flex items-center justify-center gap-2 rounded-full p-3 border" />
        <Avatar className="w-10 h-10 rounded-full">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
