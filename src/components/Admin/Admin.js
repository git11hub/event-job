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

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                        {/* <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem> */}
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
                    <input defaultValue="" {...register("example")} />
                    <br/>
                    <br/>

                    {/* <input name="name" defaultValue="" placeholder="Product Name" ref={register} />
                    <br />
                    <br /> */}

                    <input {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br/>
                    <br/>

                    <input type="submit" />
                </form>
            }
        </>

    );
};

export default Admin;