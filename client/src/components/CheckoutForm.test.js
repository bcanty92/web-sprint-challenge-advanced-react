import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {container} = render(<CheckoutForm />);

    const header = container.querySelector('h2')
    expect(header.textContent).toBe('Checkout Form')
});

test("form shows success message on submit with form details", async () => {
    const {container} = render(<CheckoutForm />);
    const container2 = render(<CheckoutForm />);
    const firstName = container.querySelector('input[name= "firstName"]');
    const lastName = container.querySelector('input[name= "lastName"]');
    const address = container.querySelector('input[name= "address"]');
    const city = container.querySelector('input[name= "city"]');
    const state = container.querySelector('input[name= "state"]');
    const zip = container.querySelector('input[name= "zip"]');
    const checkOut = container.querySelector('button')




    await waitFor(() => {
        fireEvent.change(firstName, {
            target:{
                value: 'John'
            }
        })
    })

    await waitFor(() => {
        fireEvent.change(lastName, {
            target:{
                value: 'Doe'
            }
        })
    })

    await waitFor(() => {
        fireEvent.change(address, {
            target:{
                value: ' 123 fake street'
            }
        })
    })

    await waitFor(() => {
        fireEvent.change(city, {
            target:{
                value: ' A city'
            }
        })
    })

    await waitFor(() => {
        fireEvent.change(state, {
            target:{
                value: 'ME'
            }
        })
    })

    await waitFor(() => {
        fireEvent.change(zip, {
            target:{
                value: ' 12345'
            }
        })
    })

    await waitFor(()=>{
        fireEvent.click(checkOut)
    })

    const successMessage = container2.getByTestId('successMessage')

    expect(successMessage.textContent).toBe('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to: John Doe 123 fake street A city, ME  12345')

});
