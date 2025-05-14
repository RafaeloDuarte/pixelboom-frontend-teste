import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FilterIcon, CalendarIcon, ClockIcon } from "lucide-react"
import { AddUserDialog } from "./AddUserDialog"

const users = [
  {
    name: "José Ricardo Gomes",
    initials: "JG",
    age: 51,
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    session: "38m22s",
    type: "Usuário padrão",
    status: "Ativo",
  },
  {
    name: "Helena Soares",
    initials: "HS",
    age: 46,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    session: "38m22s",
    type: "Usuário padrão",
    status: "Inativo",
  },
  // ...outros usuários
]

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Usuários</h1>
        <AddUserDialog />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><p className="text-sm">Usuários</p><p className="text-xl font-bold">294</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm">Tempo de sessão</p><p className="text-xl font-bold">31m 20s</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm">Ativos</p><p className="text-xl font-bold">203</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm">Inativos</p><p className="text-xl font-bold">127</p></CardContent></Card>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Buscar..." className="w-full max-w-md" />
        <Button variant="outline" size="icon">
          <FilterIcon className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="h-[500px] rounded-md border">
        <div className="space-y-2 p-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg p-4 hover:bg-muted transition"
            >
              <div className="flex items-center gap-4">
                <Avatar><AvatarFallback>{user.initials}</AvatarFallback></Avatar>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {user.age} anos, {user.gender}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{user.date}</span>
                    <ClockIcon className="w-4 h-4 ml-2" />
                    <span>{user.session}</span>
                    <Badge variant="secondary" className="ml-2">{user.type}</Badge>
                  </div>
                </div>
              </div>
              <Badge variant={user.status === "Ativo" ? "default" : "outline"}>
                {user.status}
              </Badge>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
