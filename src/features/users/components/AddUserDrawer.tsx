"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { toast } from "sonner"

type AddUserDrawerProps = {
  onAddUser: (user: any) => void
}

export function AddUserDrawer({ onAddUser }: AddUserDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newUser = {
      name,
      email,
      status: status ? "Ativo" : "Inativo",
      initials: name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      age: 0,
      gender: "Não informado",
      date: new Date().toLocaleString("pt-BR"),
      session: "0s",
      type: "Usuário padrão",
    }

    onAddUser(newUser)
    toast.success("Usuário adicionado com sucesso!")
    setIsOpen(false) // Fecha o drawer
    setName("")
    setEmail("")
    setStatus(true)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Adicionar</Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[560px] h-[992px] flex flex-col gap-10 p-10">
        <SheetHeader className="flex flex-row items-start justify-between mb-6">
          <SheetTitle className="text-lg font-medium font-serif p-0">
            Adicionar usuário
          </SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <Label>Nome completo</Label>
            <Input
              placeholder="Digite o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>E-mail</Label>
            <Input
              placeholder="Digite o e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Telefone</Label>
            <Input placeholder="Informe o telefone" />
            <div className="flex items-center gap-2 mt-2">
              <Checkbox id="whatsapp" defaultChecked />
              <Label htmlFor="whatsapp" className="text-sm font-normal">
                WhatsApp
              </Label>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label>CPF</Label>
              <Input placeholder="Informe o CPF" />
            </div>
            <div className="flex-1">
              <Label>RG</Label>
              <Input placeholder="Informe o RG" />
            </div>
          </div>

          <div>
            <Label>Confirmar e-mail</Label>
            <Input placeholder="Digite o e-mail novamente" />
          </div>

          <div className="p-4 flex items-center justify-between mt-2">
            <div>
              <Label>Status</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Defina se o usuário estará ativo ao ser adicionado.
              </p>
            </div>
            <Switch checked={status} onCheckedChange={setStatus} />
          </div>

          <SheetFooter className="mt-8 flex flex-row justify-end gap-2">
            <Button
              variant="outline"
              type="button"
              className="rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" className="rounded-full">
              Adicionar
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
