import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMd, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            company: data.example,
            designation: data.designation,
            location: data.location,
            qualification: data.qualification,
            experience: data.experience,
            deadline: data.deadline,
            imageURL: imageURL
        };
        const url = `http://localhost:8080/addEvent`;
        // console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '5870d12aca9578621979f197d76fce5a');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const [show, setShow] = useState(true);

    // const onSubmit = data => {

    // }
    return (
        <>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem onClick={() => setShow(true)} eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <FontAwesomeIcon icon={faUserMd} /> Applicant
                        </NavText>
                    </NavItem>
                    <NavItem onClick={() => setShow(false)} eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <FontAwesomeIcon icon={faPlus} /> Add Job
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            {show ?
                <Table className="mt-5" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>example@gmail.com</td>
                            <td>3-5-21</td>
                            <td>Hudo</td>
                            <td style={{ color: "red" }}><FontAwesomeIcon icon={faTrashAlt} /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>4-2-21</td>
                            <td>bat</td>
                            <td style={{ color: "red" }}><FontAwesomeIcon icon={faTrashAlt} /></td>
                        </tr>
                    </tbody>
                </Table> :

                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>                    

                    <input placeholder="Company name" defaultValue="" {...register("example")} />
                    <br />
                    <br />

                    <input placeholder="designation" defaultValue="" {...register("designation")} />
                    <br />
                    <br />

                    <input name="location" placeholder="location" defaultValue="" {...register("location")} />
                    <br />
                    <br />

                    <input name="qualification" placeholder="Education Qualification" defaultValue="" {...register("qualification")} />
                    <br />
                    <br />

                    <input name="experience" placeholder="experience" defaultValue="" {...register("experience")} />
                    <br />
                    <br />

                    <input name="deadline" placeholder="Deadline" defaultValue="" {...register("deadline")} />
                    <br />
                    <br />

                    <input id="getFile" name="image" type="file" placeholder="" defaultValue="" onChange={handleImageUpload} />
                    <br />
                    <br />

                    <input type="submit" />
                </form>
            }
        </>

    );
};

export default Admin;