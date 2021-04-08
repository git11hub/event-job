import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Job from '../Job/Job';
import { JobContext } from '../../App';

const Home = () => {

    const [jobList, setJobList] = useContext(JobContext);
    // const [jobList, setJobList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/job-list`)
            .then(res => res.json())
            .then(data => setJobList(data))
    }, [])

    return (
        <Container>
            <Row>
                {
                    jobList.map(job => <Job job={job}></Job>)
                }
            </Row>
        </Container>
    );
};

export default Home;