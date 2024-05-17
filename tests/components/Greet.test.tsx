import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe('Greet', () => {
  it('Should have Hello name', () => {
    render(<Greet name="Kyle" />);
    screen.debug()
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Hello Kyle/i);
  });

  it('Should have Login button', () => {
    render(<Greet/>);
    screen.debug()
    const heading = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Login/i);
  });
});