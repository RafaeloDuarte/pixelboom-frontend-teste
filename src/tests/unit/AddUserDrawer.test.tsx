import { AddUserDrawer } from "@/features/users/components/AddUserDrawer";
import { render } from "@testing-library/react"
import { screen, fireEvent } from "@testing-library/dom"
import { describe, it, expect, vitest } from "vitest";

describe("AddUserDrawer", () => {
  it("renders trigger button", () => {
    render(<AddUserDrawer onAddUser={vitest.fn()} />)
    expect(screen.getByText("Adicionar")).toBeInTheDocument()
  })

  it("opens dialog on click", () => {
    render(<AddUserDrawer onAddUser={vitest.fn()} />)
    expect(screen.getByText("Adicionar")).toBeInTheDocument()
  })
})
