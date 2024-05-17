import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions.test", () => {
  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);
    screen.debug();
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Terms & Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const buttonItem = screen.getByRole("button", { name: /submit/i });
    expect(buttonItem).toBeInTheDocument();
    expect(buttonItem).toHaveAttribute("disabled");
  });

  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);
    screen.debug();
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Terms & Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const buttonItem = screen.getByRole("button", { name: /submit/i });
    expect(buttonItem).toBeInTheDocument();
    expect(buttonItem).toHaveAttribute("disabled");
  });

  it("should enable button when check box is checked", async () => {
    render(<TermsAndConditions />);
    

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
    screen.debug();
  });
});
