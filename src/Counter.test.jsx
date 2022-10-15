// TESTER
// DEL AV TESTING-OPPGAVE

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {Counter} from './Counter'

it('should start at 0', () => {
    render(<Counter count={9}/>)

    const paragraph = document.querySelector('p');
    expect(paragraph).toHaveTextContent('Count is: 0')
})

it('should increase when increment button is clicked', () => {
    render(<Counter />)

    expect(document.querySelector('p')).toHaveTextContent('Count is: 0')
    fireEvent.click(screen.getByText('Increment'))
    expect(document.querySelector('p')).toHaveTextContent('Count is: 1')
})

it('should decrease when increment button is clicked', () => {
    render(<Counter />)

    expect(document.querySelector('p')).toHaveTextContent('Count is: 0')
    fireEvent.click(screen.getByText('Decrement'))
    expect(document.querySelector('p')).toHaveTextContent('Count is: -1')
})