import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { JobContext } from '../../App';

const JobDetails = () => {

    const {id} = useParams();

    const [jobList, setJobList] = useContext(JobContext);

    const selectedJob = jobList.find(job => job._id == id);

    const apply = () => {
        // history.push(`/jobdetails/${_id}`);
        const url = `http://localhost:8080/appliedJob`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedJob)
        })
        .then(res => console.log('server side response', res))
    }

    return (
        <div>
            <h2>here is job details...</h2>
            <h2>here is some data: {selectedJob.company}</h2>
            <Button onClick={apply}>Apply</Button>
        </div>
    );
};

export default JobDetails;