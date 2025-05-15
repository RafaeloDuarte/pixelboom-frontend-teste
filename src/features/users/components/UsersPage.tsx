import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  ListFilter,
  TagIcon,
  UserIcon,
} from "lucide-react"
import { AddUserDrawer } from "./AddUserDrawer"

const initialUsers = [
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
]

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)

  const handleAddUser = (newUser: any) => {
    setUsers((prev) => [...prev, newUser])
  }

  return (
    <div className="w-[1040px] h-[920px] flex flex-col gap-5 p-10">
      <div className="w-[960px] h-[60px] flex justify-between items-center pb-5">
        <h1 className="font-serif font-normal text-3xl leading-9 tracking-tighter">
          Usuários
        </h1>
        <AddUserDrawer onAddUser={handleAddUser} />
      </div>

      <div className="w-[960px] h-[100px] grid grid-cols-4 gap-5">
        {[
          { label: "Usuários", value: users.length },
          { label: "Tempo de sessão", value: "31m 20s" },
          {
            label: "Ativos",
            value: users.filter((u) => u.status === "Ativo").length,
          },
          {
            label: "Inativos",
            value: users.filter((u) => u.status !== "Ativo").length,
          },
        ].map((item, index) => (
          <Card key={index} className="w-[225px] h-[100px] rounded-lg">
            <CardContent className="px-6 flex flex-col gap-2">
              <p className="text-xs font-normal leading-none tracking-[-0.4px] font-sans">
                {item.label}
              </p>
              <h1 className="text-3xl leading-9 font-normal tracking-tighter font-serif">
                {item.value}
              </h1>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-[960px] h-10 flex gap-3">
        <Input
          placeholder="Buscar..."
          className="w-[908px] h-10 flex items-center gap-2 rounded"
        />

        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 flex items-center justify-center gap-3 rounded-full"
        >
          <ListFilter className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="w-[960px] max-h-[500px]">
        <div className="flex flex-col gap-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="w-[960px] h-20 flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 rounded-full p-[10px]">
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-semibold text-sm">{user.name}</p>
                    <UserIcon className="w-3 h-3" />
                    <p className="text-sm text-muted-foreground">
                      {user.age} anos, {user.gender}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <CalendarIcon className="w-3 h-3" />
                    <span>{user.date}</span>
                    <ClockIcon className="w-3 h-3 ml-2" />
                    <span>{user.session}</span>
                    <TagIcon className="w-3 h-3 ml-2" />
                    <span>{user.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant={user.status === "Ativo" ? "secondary" : "outline"}
                >
                  <span
                    className={
                      user.status === "Ativo" ? "font-semibold" : "text-gray"
                    }
                  >
                    {user.status}
                  </span>
                </Badge>
                <Button variant="ghost">
                  <EllipsisVerticalIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>

      </ScrollArea>
      <div className="w-[960px] h-10 flex items-center justify-between mt-3 text-sm text-muted-foreground">
        <span className="text-xs">5 de 294 itens</span>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="px-2 h-8 text-xs text-muted-foreground">
            &lt; Anterior
          </Button>
          <Button variant="ghost" size="sm" className="px-2 h-8 text-xs font-semibold border rounded">
            1
          </Button>
          <Button variant="ghost" size="sm" className="px-2 h-8 text-xs text-muted-foreground">
            2
          </Button>
          <span className="text-muted-foreground text-xs px-1">...</span>
          <Button variant="ghost" size="sm" className="px-2 h-8 text-xs text-muted-foreground">
            58
          </Button>
          <Button variant="ghost" size="sm" className="px-2 h-8 text-xs text-muted-foreground">
            Próxima &gt;
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span>Itens por página</span>
          <select className="h-8 px-2 border rounded text-sm bg-transparent">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  )
}
