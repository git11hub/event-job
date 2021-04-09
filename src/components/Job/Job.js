import { Button, Col } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { JobContext } from '../../App';
import { useHistory } from 'react-router';

const Job = (props) => {

    const { company, designation, location, qualification, deadline, experience, imageURL, _id } = props.job;

    const [jobList, setJobList] = useContext(JobContext);
    console.log(props);

    const history = useHistory();

    const details = () => {
        history.push(`/jobdetails/${_id}`);
    }

    return (
        <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title><h4>{company}</h4></Card.Title>
                    <Card.Text>
                        <li style={{ listStyleType: "none" }}><strong>Designation:</strong> {designation}</li>
                        <li style={{ listStyleType: "none" }}><strong>Location:</strong> {location}</li>
                        <li style={{ listStyleType: "none" }}><strong>Education qualification:</strong> {qualification}</li>
                        <li style={{ listStyleType: "none" }}><strong>Experience:</strong> {experience}</li>
                        <li style={{ listStyleType: "none" }}><strong>Deadline:</strong> {deadline}</li>
                    </Card.Text>
                    <Button onClick={details} variant="primary">Details...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Job;