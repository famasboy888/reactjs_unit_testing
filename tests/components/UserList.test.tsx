import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

const userList: User[] = [
  {
    id: 1,
    name: "john",
    isAdmin: true,
  },
  {
    id: 2,
    name: "jane",
    isAdmin: false,
  },
  {
    id: 3,
    name: "tarzan",
    isAdmin: false,
  },
];

describe("UserList", () => {
  it("should not render users when array is empty", () => {
    render(<UserList users={[]} />);
    screen.debug();
    const result = screen.getByText(/no users/i);

    expect(result).toBeInTheDocument();
  });

  it("should render users when array is not empty", () => {
    render(<UserList users={userList} />);
    screen.debug();

    userList.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
