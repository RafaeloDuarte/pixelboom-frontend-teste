import { Sidebar } from "@/components/layout/sidebar/Sidebar"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Sidebar", () => {
  it("renders navigation links", () => {
    render(<Sidebar />)
    expect(screen.getByText("Usuários")).toBeInTheDocument()
  })
})
