import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Card from "./Card"


it("should show the beer name and image on the card", () => {
    //.1 Arrange
    render(<Card/>)

    //.2 Act
    const name = screen.getByRole("h2")
    const beer = screen.getByRole("img");



    //3. Assert
    expect(name).toBeInTheDocument();
    expect(beer).toBeInTheDocument();
}) 
