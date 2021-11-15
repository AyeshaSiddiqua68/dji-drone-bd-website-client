import React from 'react';
import logo4 from '../../assets//images/contactLogo/contact-info-logo4.png'
import logo5 from '../../assets//images/contactLogo/contact-info-logo5.png'
import logo6 from '../../assets//images/contactLogo/contact-info-logo6.png'
import Button from 'react-bootstrap/Button'
import logo from '../../assets//images/contactLogo/contact-info-logo.png'
import logo2 from '../../assets//images/contactLogo/contact-info-logo2.png'
import logo3 from '../../assets//images/contactLogo/contact-info-logo3.png'
import './Contact.css'

// all about contact page
const Contact = () => {
    return (
        <div>
            {/* main part */}
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-15" src={logo4} alt="" />
                        </div>
                        <h4>Office Address</h4>
                        <p>Lane-03, Block-B, Section-06 <br /> Mirpur, Dhaka-1216, Bangladesh</p>
                    </div>
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-40" src={logo5} alt="" />
                        </div>
                        <h4>Email Address</h4>
                        <p>ayesha68@gmail.com <br /> info49@gmail.com</p>
                    </div>
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-25" src={logo6} alt="" />
                        </div>
                        <h4>Office Time</h4>
                        <p>Mon - Sat 9:00 - 5:00 <br />
                            Sunday - Closed</p>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row p-5  ">
                    <div className="col-md-6 col-sm-12 col-12 left-part ">
                        <h1 className="text-danger fw-bold mt-4 p-4">Send Us Message</h1>
                        <input
                            className="footer-input mb-3 py-2 "
                            type="text"
                            placeholder="Enter Your Name"
                        /> <br />
                        <input
                            className="footer-input"
                            type="email"
                            placeholder="Enter Your Email"
                        /> <br />
                        <textarea className="p-3 mt-2" name="message" rows="5" cols="20" placeholder="Write Your Message"></textarea>
                        <br />
                        <Button className="m-4" variant="danger">Send</Button>
                    </div>


                    <div className="col-md-6 col-sm-12 col-12 right-part">
                        <h1 className="text-danger fw-bold mt-4 p-4">Get In Touch</h1>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>Lane-03, Block-B, Section-06 <br /> Mirpur, Dhaka-1216, Bangladesh</b></p>
                            </div>
                        </div>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo2} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>+(666) 053 39985
                                    <br /> +(333) 026 58963</b></p>
                            </div>
                        </div>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo3} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>themix@gmail.com <br /> support@themix.com</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;