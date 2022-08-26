import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


it ("should render the basic input field", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
});

it ("should render the different links", () => {
  render(<App />);
  const links = screen.getAllByRole("link");
  links.forEach((link) => {
    expect(link).toBeInTheDocument();
  })
});

it("should read the beer name when it is typed", () => {
  render(<App/>);
  const nameInput = screen.getByRole("textbox", {
    name: ""
  })
  userEvent.type(nameInput, "Buzz")

  const beer = screen.queryByText("Buzz")
  expect(beer).toBeInTheDocument();
})