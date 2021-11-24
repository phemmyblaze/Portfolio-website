import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/bobola.sunday">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/akinuliolaakinbobola/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/phemmyblaze">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://twitter/phemmyblaz">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Akinuliola Akinbobola </span>
                        </span>
                    </div>

                    <div className="profile-details-roles">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                    lopp={Infinity}
                                    steps={[
                                        "Passionate Dev 👨   ",
                                        1000,
                                        "Frontend Developer 💻  ",
                                        1000,
                                        "Bug slayer Dev 🐛 ",
                                        1000,
                                        "Builder 🏗 ",
                                        1000,
                                        "Javascript/React Dev",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Creating magic with code and solving problems
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {""}
                            Hire me {" "}
                        </button>
                        <a href='akinbobola.pdf' download='Akinuliola Akinbobola.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
            
        </div>
    );
}
