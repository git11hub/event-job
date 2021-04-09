import React from 'react';
import { Table } from 'react-bootstrap';

const User = () => {
    return (
        <Table className="mt-5" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Company Name</th>
                    <th>Designation</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>3-5-21</td>
                    <td>Hudo</td>
                    <td>mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>4-2-21</td>
                    <td>bat</td>
                    <td>fat</td>
                </tr>                
            </tbody>
        </Table>
    );
};

export default User;