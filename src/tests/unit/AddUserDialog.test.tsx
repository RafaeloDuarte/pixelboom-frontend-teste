import { AddUserDialog } from "@/features/users/components/AddUserDialog";
import { render } from "@testing-library/react"
import { screen, fireEvent } from "@testing-library/dom"
import { describe, it, expect } from "vitest";

describe("AddUserDialog", () => {
  it("renders trigger button", () => {
    render(<AddUserDialog />)
    expect(screen.getByText("+ Adicionar")).toBeInTheDocument()
  })

  it("opens dialog on click", () => {
    render(<AddUserDialog />)
    fireEvent.click(screen.getByText("+ Adicionar"))
    expect(screen.getByText("Adicionar usuário")).toBeInTheDocument()
  })

  it("has fields and toggles", () => {
    render(<AddUserDialog />)
    fireEvent.click(screen.getByText("+ Adicionar"))

    expect(screen.getByLabelText("Nome completo")).toBeInTheDocument()
    expect(screen.getByLabelText("Telefone")).toBeInTheDocument()
    expect(screen.getByLabelText("WhatsApp")).toBeInTheDocument()
    expect(screen.getByLabelText("Ativo")).toBeInTheDocument()
  })
})
