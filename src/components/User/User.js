import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const User = () => {

    const [appliedJob, setAppliedJob] = useState([]);   

    console.log(appliedJob);

    useEffect(() => {
        fetch(`http://localhost:8080/appliedJob`)
            .then(res => res.json())
            .then(data => setAppliedJob(data))
    }, [])

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
                {
                  appliedJob.map(singleApplied =>
                  <tr>
                    <td></td>
                    <td>{singleApplied.company}</td>
                    <td>{singleApplied.designation}</td>
                    <td>3-5-21</td>
                    <td>{singleApplied.location}</td>
                    <td>mdo</td>
                </tr> )  
                }
                
            </tbody>
        </Table>
    );
};

export default User;