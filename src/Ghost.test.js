import {render,screen} from '@testing-library/react';
import App from './App';
import Ghost from './Ghost';

//// NOT YET DONE   -->

test ('', () =>{
    render(<Ghost />);
    const divElements = screen.getByText(/c/i);
    expect(divElements).toBeInTheDocument();
})

test ('', () =>{
    render(<Ghost />);
    const myElements = screen.getByText(/c/i);  
    expect(myElements).toBeInTheDocument();
})

test ('', () =>{
    render(<Ghost />);
    const headerElements = screen.getByText(/c/);
    expect(headerElements).toBeInTheDocument();
})

test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/C/g);
    expect(cElements).toBeInTheDocument();
})

test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})
test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})
test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})
test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})
test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})
test ('', () =>{
    render(<Ghost />);
    const cElements = screen.getByText(/Z/ );
    expect(cElements).toBeInTheDocument();
})