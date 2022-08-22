import BeerCard from "./BeerCard";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it ("should render an image", () =>{
    render(<BeerCard />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
});
