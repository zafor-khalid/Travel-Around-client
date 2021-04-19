import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router';
import { BookContext } from '../../Routing/Routing';

const Book = () => {
    const history = useHistory();
    const [book, setBook] = useContext(BookContext);
    let total = 0;
    book.map(pd => total += parseInt(pd.price))

    const confirm = () =>{
        // setBook([]);
        history.push('/confirmation')
    }

    return (
        <div className=" m-3">
        <h3>Total Products: {book.length}</h3>

        <div className="d-flex justify-content-center">
            <Table striped bordered hover size="sm" className="w-50">
                <thead>
                    <tr className="bg-success text-white">
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Cost</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((pd, idx) => (

                            <tr>
                                <td>{idx + 1}</td>
                                <td>{pd.title}</td>
                                <td>$ {pd.price}</td>
                            </tr>
                        ))
                    }
                    <tr>

                        <td colSpan="2" className="bg-success text-white">Total</td>
                        <td className="bg-success text-white">Tk {total}</td>
                    </tr>

                </tbody>

            </Table>

        </div>
        <button className="btn btn-success " onClick={confirm}>Check Out</button>

    </div>
    );
};

export default Book;