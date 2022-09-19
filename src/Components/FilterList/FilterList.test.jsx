import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FilterList from "./FilterList"


it("should show the different sort by options", () => {
    //.1 Arrange
    render(<FilterList/>)

    //.2 Act
    const option1 = screen.queryByText("ABV%");
    const option2 = screen.getByText(/pH/i);
    const option3 = screen.findByText(/Brew Date/i);

    //3. Assert
    expect(option1).toBeInTheDocument();
    expect(option2).toBeTruthy();
    expect(option3).toBeInTheDocument();
}) 