import { CircleHelp, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="w-full h-16 border-b flex items-center justify-end px-6 bg-white">
      <div className="flex items-center gap-6">
        <CircleHelp className="w-5 h-5 text-muted-foreground cursor-pointer" />
        <Bell className="w-5 h-5 text-muted-foreground cursor-pointer" />
        <Avatar className="w-8 h-8">
          <AvatarImage src="" alt="User" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
