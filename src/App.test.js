import { render, screen } from '@testing-library/react';
import App from './App';


it ("should render the basic input field", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
});