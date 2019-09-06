import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import './Registration.scss';

class Registration extends Component {
    render() {
        return(
            <div className="registration">
                <Helmet><title>Akkordlar - Qeydiyyat</title></Helmet>
                <div className="registration__header">
                    Qeydiyyatdan keçin
                </div>
                <div className="registration__form">
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>İstifadəçi adı</Form.Label>
                            <Form.Control type="username" placeholder="İstifadəçi adını daxil edin" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Elektron poçt ünvanı</Form.Label>
                            <Form.Control type="email" placeholder="E-mail ünvanınızı daxil edin" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="firstname">
                            <Form.Label>Ad</Form.Label>
                            <Form.Control type="firstname" placeholder="Adınızı daxil edin" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="lastname">
                            <Form.Label>Soyad</Form.Label>
                            <Form.Control type="lastname" placeholder="Soyadınızı adını daxil edin" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Şifrə</Form.Label>
                            <Form.Control type="password" placeholder="Şifrənizi daxil edin" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Qeydiyyat
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Registration;