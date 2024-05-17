import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe('UserAccount', () => {
  it('should display Edit button when user type is Admin', () => {
    const user: User = {
      id: 1,
      name: "john",
      isAdmin: true,
    }

    render(<UserAccount user={user} />);
    screen.debug();

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Edit/i);
  })

  it('should display User if present', () => {
    const user: User = {
      id: 1,
      name: "john",
      isAdmin: true,
    }

    render(<UserAccount user={user} />);
    screen.debug();

    const text = screen.getByText(/john/i);

    expect(text).toBeInTheDocument();
  })

  it('should not display Edit button if not Admin', () => {
    const user: User = {
      id: 1,
      name: "john",
      isAdmin: false,
    }

    render(<UserAccount user={user} />);
    screen.debug();

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  })
})