import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function AddUserDialog() {
  const [isWhatsApp, setIsWhatsApp] = useState(true)
  const [isActive, setIsActive] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-foreground text-background hover:bg-foreground/90">
          + Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-screen">
        <DialogHeader>
          <DialogTitle>Adicionar usuário</DialogTitle>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" placeholder="Digite o nome" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Digite o e-mail" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" placeholder="Informe o telefone" />
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id="whatsapp"
                checked={isWhatsApp}
                onCheckedChange={(checked) => setIsWhatsApp(!!checked)}
              />
              <Label htmlFor="whatsapp" className="text-sm">
                WhatsApp
              </Label>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="Informe o CPF" />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" placeholder="Informe o RG" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email2">E-mail</Label>
            <Input id="email2" type="email" placeholder="Digite o e-mail" />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <div className="flex items-center justify-between p-2 rounded border">
              <span className="text-sm text-muted-foreground">
                Defina se o usuário estará ativo ao ser adicionado.
              </span>
              <div className="flex items-center gap-2">
                <Switch
                  id="status"
                  checked={isActive}
                  onCheckedChange={(checked) => setIsActive(!!checked)}
                />
                <Label htmlFor="status" className="text-sm font-medium">
                  Ativo
                </Label>
              </div>
            </div>
          </div>
        </form>

        <DialogFooter className="pt-4">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
