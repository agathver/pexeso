'use strict';

const React = require('react');
const ReactHelmet = require('react-helmet');


const Helmet = ReactHelmet.Helmet;


class AboutPage extends React.Component {
    render() {

        return (
            <section className="section-about container">
                <Helmet>
                    <title>About us</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About us</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Jaco Greyling</h4>
                                <p>
                                    CTO Enterprise DevOps
                                </p>
                                <p>
                                    <em>The Developer</em>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Charl-Andrian Klein</h4>
                                <p>
                                    Senior Consultant - DevOps
                                </p>
                                <p>
                                    <em>The Ops Guy</em>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Michael Brink</h4>
                                <p>
                                    Solution Strategist
                                </p>
                                <p>
                                    <em>The API Guy</em>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">GitHub</h1>
                        <p className="lead">
                            Fork&nbsp;
                            <a href="https://github.com/jacogreyling/pexeso"
                                style={{ outline: '0' }} target="_blank" rel="noopener noreferrer">
                                this
                            </a>&nbsp;project on Github and help us build pexeso.
                        </p>
                        <img height="250" width="250" src="public/media/github.png"
                            alt="Fork this project on Github and help us build pexeso" />
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = AboutPage;
