import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Nav from "../Nav/Nav";
import DateSortedMain from "./DateSortedMain";


it("should show the classic range date 2010 on screen", () => {
    //.1 Arrange
    render(<DateSortedMain />)

    //.2 Act
    const range = screen.getByText("2010")



    //3. Assert
    expect(range).toBeInTheDocument();
}) 
