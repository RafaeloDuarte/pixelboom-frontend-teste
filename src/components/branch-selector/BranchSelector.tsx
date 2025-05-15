import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronsUpDown } from "lucide-react"

type Branch = {
    id: string
    name: string
}

const branches: Branch[] = [
    { id: "A", name: "Filial A" },
    { id: "B", name: "Filial B" },
]

export function BranchSelector() {
    return (
        <Select defaultValue="A">
            <SelectTrigger className="w-full border-none shadow-none bg-transparent hover:bg-muted/30 [&>svg:last-child]:hidden font-bold">
                <div className="flex items-center gap-2 py-4 pr-1">
                    <SelectValue placeholder="Selecione a filial" />
                </div>
                <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
            </SelectTrigger>
            <SelectContent>
                {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.id}>
                        <div className="flex items-center gap-2 text-bold">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="rouded-md">
                                    {branch.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            {branch.name}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
