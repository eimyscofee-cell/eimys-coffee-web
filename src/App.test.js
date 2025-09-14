import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders home page on default route", () => {
  // Envolvemos App en MemoryRouter porque App usa componentes de enrutamiento (Routes, Route)
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  // Verificamos que el título de la página de inicio esté presente
  const headingElement = screen.getByText(/Momentos que saben a café/i);
  expect(headingElement).toBeInTheDocument();
});
