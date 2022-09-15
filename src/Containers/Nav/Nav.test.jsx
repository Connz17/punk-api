import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Nav from "./Nav"


it("should show the different sort by option once clicked", () => {
    //.1 Arrange
    render(<Nav />)

    //.2 Act
    const sort = screen.getByText(/Sort By:/i)
    userEvent.click(sort)

    const option1 = screen.queryByText("ABV%");
    const option2 = screen.getByText(/pH/i);
    const option3 = screen.findByText(/Brew Date/i);

    //3. Assert
    expect(option1).toBeInTheDocument();
    expect(option2).toBeTruthy();
    expect(option3).toBeInTheDocument();
}) 
