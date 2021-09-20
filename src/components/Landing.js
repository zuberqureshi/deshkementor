import React from "react";
import slider1 from "../images/slide1.jpg";
import slider2 from "../images/slide2.jpg";
import slider3 from "../images/slide3.jpg";
import slider4 from "../images/slide4.jpg";
import slider5 from "../images/slide5.jpg";
import blueCircle from "../images/shape/blue-circle.svg";
import lightDiamond from "../images/shape/lightblue-diamond2.svg";
import blueDots from "../images/shape/blue-dots.svg";
import flagDivider from "../images/flag-divider.png";
import greenboard from "../images/greenboard.png";
import curveShape from "../images/curve-shape.png";
import yellowCircle from "../images/shape/yellow-circle.svg";
import lightyellowdiamond from "../images/shape/lightyellow-diamond.svg";
import lightbluelgdiamond from "../images/shape/lightblue-lg-diamond.svg";
import mentor from "../images/mentor.png";
import mentee from "../images/mentee.png";
import stepjonurey1 from "../images/step-journey1.png";
import stepjonurey2 from "../images/step-journey2.png";
import story1 from "../images/1-story.jpg";
import story2 from "../images/2-story.jpg";
import resulmentes from "../images/resul-mentes.jpg";
import aboutus from "../images/aboutus-bg.jpg";

export default function Landing() {
    return (
        <>
            <div className="loop owl-carousel owl-theme1 bg-white">
                <div className="item">
                    <div className="slider-box">
                        <div className="sb-left">
                            <img src={slider1} />
                        </div>
                        <div className="sb-right">
                            <h3>India’s biggest mentorship programme</h3>
                            <h3 className="text-white py-3">देश के मेन्टर</h3>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg text-yellow"
                            >
                                Register Now &#10148;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-box">
                        <div className="sb-left">
                            <img src={slider2} />
                        </div>
                        <div className="sb-right">
                            <h3>India’s biggest mentorship programme</h3>
                            <h3 className="text-white py-3">देश के मेन्टर</h3>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg text-yellow"
                            >
                                Register Now &#10148;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-box">
                        <div className="sb-left">
                            <img src={slider3} />
                        </div>
                        <div className="sb-right">
                            <h3>India’s biggest mentorship programme</h3>
                            <h3 className="text-white py-3">देश के मेन्टर</h3>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg text-yellow"
                            >
                                Register Now &#10148;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-box">
                        <div className="sb-left">
                            <img src={slider4} />
                        </div>
                        <div className="sb-right">
                            <h3>India’s biggest mentorship programme</h3>
                            <h3 className="text-white py-3">देश के मेन्टर</h3>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg text-yellow"
                            >
                                Register Now &#10148;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-box">
                        <div className="sb-left">
                            <img src={slider5} />
                        </div>
                        <div className="sb-right">
                            <h3>India’s biggest mentorship programme</h3>
                            <h3 className="text-white py-3">देश के मेन्टर</h3>
                            <a
                                href="#"
                                className="btn btn-primary btn-lg text-yellow"
                            >
                                Register Now &#10148;
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-sm-12 text-center my-4">
                        <div className="counter-box">5</div>
                        <div className="counter-box">0</div>
                        <div className="counter-box">0</div>
                        <div className="counter-box">0</div>
                        <div className="counter-box">0</div>
                    </div>
                    <div className="col-sm-12 text-center sub-heading">
                        Students have started their mentoring journey.
                        <br />
                        Find your mentee now, and start the journey!
                    </div>
                </div>
                <div className="row mt-4 mt-md-5 position-relative">
                    <div className="col-sm-10 offset-sm-1 col-md-8 my-4">
                        <h2 className="heading-2">Our Vision</h2>
                        <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                            <p className="m-0 fs-sm-23">
                                Building a <strong>community of youth</strong>{" "}
                                who are part of the{" "}
                                <strong>culture of volunteering</strong>,
                                working to create spaces for students to have an
                                open dialogue about their{" "}
                                <strong>careers, opinions</strong> and{" "}
                                <strong>everyday choices</strong>.
                            </p>
                        </div>
                    </div>
                    <img src={blueCircle} className="shape shape-1" />
                    <img src={lightDiamond} className="shape shape-2" />
                </div>
                <div className="row justify-content-end mt-4 mt-md-5 position-relative">
                    <div className="col-sm-10 col-md-8 my-4">
                        <h2 className="heading-2 text-md-end">Our Mission</h2>
                        <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                            <ul className="m-0 fs-sm-23">
                                <li>
                                    To make students aware of the diverse set of{" "}
                                    <strong>careers to choose from</strong>.
                                </li>
                                <li>
                                    To <strong>guide and support</strong>{" "}
                                    students in their initial{" "}
                                    <strong>career planning stages</strong>.
                                </li>
                                <li>
                                    To develop the{" "}
                                    <strong>aptitude to handle</strong> personal
                                    and professional <strong>challenges</strong>
                                    .
                                </li>
                                <li>
                                    To{" "}
                                    <strong>
                                        enhance philanthropic outlook
                                    </strong>{" "}
                                    in the community of youth for
                                    nation-building.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <img src={lightDiamond} className="shape shape-3" />
                    <img src={blueDots} className="shape shape-4" />
                </div>

                <div className="row mt-4 mt-md-5">
                    <div className="col-sm-12 text-center pt-4">
                        <img src={flagDivider} className="w-auto" />
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative overflow-hidden teacher-bg">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8">
                        <h2 className="heading-2 text-center">
                            What is Desh ke Mentor
                        </h2>
                        <div className="text-center mt-3">
                            <img src={greenboard} className="mw-100" />
                        </div>
                    </div>
                </div>
                <img
                    src={curveShape}
                    className="position-absolute w-100 start-0"
                    style={{ height: "160px", bottom: "-50px" }}
                />
            </div>

            <div className="container-fluid pb-5">
                <div className="row">
                    <div className="col-sm-12 text-center py-4 py-5">
                        <img src={flagDivider} className="w-auto" />
                    </div>
                </div>

                <div className="row justify-content-center py-5 position-relative">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7 text-center pb-3">
                        <h2 className="heading-2">
                            Now India’s youth will be a part of Delhi’s
                            Education Revolution
                        </h2>
                    </div>
                    <div className="col-sm-12 text-center">
                        <div className="row mt-3 justify-content-center">
                            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7">
                                <div className="ratio ratio-16x9 rounded-12 overflow-hidden">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Jdv9uTM2-gw"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="fs-sm-22 pt-3">
                                    Shri Arvind Kejriwal, Chief Minister, NCT of
                                    Delhi
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={yellowCircle} className="shape shape-6z" />
                </div>
                <div className="row position-relative">
                    <div className="col-sm-12 text-center py-4 py-5">
                        <img src={flagDivider} className="w-auto" />
                    </div>
                    <img src={lightyellowdiamond} className="shape shape-5" />
                    <img src={yellowCircle} className="shape shape-6" />
                    <img src={lightbluelgdiamond} className="shape shape-7" />
                </div>
            </div>

            <div
                className="container-fluid py-5 position-relative"
                style={{
                    background: `url(${resulmentes})`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top center",
                    zIndex: 2,
                }}
            >
                <div className="row justify-content-center">
                    <div className="col-sm-12 text-center my-4">
                        <h2 className="heading-1">About Us</h2>
                    </div>
                    <div className="col-sm-10">
                        <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                            <p className="m-0 fs-sm-23">
                                <strong>Desh Ke Mentor</strong>, an initiative
                                under <strong>Youth for Education</strong>, is
                                the nation’s largest mentoring program launched
                                by the <strong>Delhi government</strong> under
                                the guidance and honourable leadership of{" "}
                                <strong>CM Arvind Kejriwal</strong> and{" "}
                                <strong>Dy CM. Manish Sisodia</strong>.<br />
                                Under Desh Ke Mentor, students of Delhi
                                Government schools (mentees) will undertake a{" "}
                                <strong>career exploration journey</strong> that
                                will help them to make informed career choices.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center my-4 py-5">
                        <h2 className="heading-2">We Need Desh ke Mentors!</h2>
                        <div className="row mt-3 justify-content-center">
                            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7">
                                <div className="ratio ratio-16x9 rounded-12 overflow-hidden">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/x6dzQjRYnxk"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="fs-sm-22 pt-3">
                                    Shri Manish Sisodia, Deputy Chief Minister,
                                    NCT of Delhi
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                            <p className="m-0 fs-sm-23">
                                When you were young, did you know how to study
                                for a competitive exam or get a job? Do you
                                remember wanting to become a police officer or a
                                Pilot but had no idea how? Simple things that
                                may seem easy to us now are a mystery to others.
                                700+ professions exist in the world, but only a
                                few children have any awareness of diverse
                                professions. Even lesser students receive any
                                opportunity to thrive in non-traditional
                                professions.
                                <br />
                                <br />
                                The primary challenge among all students is to
                                understand what their true calling is. Desh Ke
                                Mentor Programme will connect young
                                professionals with students in IX-XII grades and
                                provide guidance for career exploration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 justify-content-center position-relative">
                    <div className="col-md-10 py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="heading-2">Mentors</h2>
                                <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                                    <div className="m-0 fs-sm-23">
                                        A mentor can be any individual under the
                                        age of 35, who is:
                                        <ul className="mb-0">
                                            <li>
                                                A student studying for a degree
                                                at an esteemed University
                                            </li>
                                            <li>
                                                A young professional in a
                                                Corporate setup
                                            </li>
                                            <li>
                                                An entrepreneur with their own
                                                business
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <h2 className="heading-2 text-md-end">
                                    Mentees
                                </h2>
                                <div className="common-box bg-white p-3 p-sm-4 p-md-5">
                                    <div className="m-0 fs-sm-23">
                                        A mentee is a student studying in
                                        10th-12th Standard at a Delhi Government
                                        School.
                                        <ul className="mb-0">
                                            <li>
                                                Help them in career exploration
                                                journey
                                            </li>
                                            <li>
                                                Safe space for discussing career
                                                & life choices
                                            </li>
                                            <li>
                                                Help in taking informed
                                                decisions
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={mentor} className="shape shape-8" />
                    <img src={mentee} className="shape shape-9" />
                </div>
            </div>

            <div
                className="container-fluid py-5 position-relative"
                style={{
                    background: `url(${aboutus})`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top center",
                    zIindex: 3,
                }}
            >
                <div className="row justify-content-center">
                    <div className="col-sm-12 text-center mt-4">
                        <h2 className="heading-1">Desh ke Mentor Journey</h2>
                    </div>
                    <div className="col-sm-10 py-4">
                        <img src={stepjonurey1} className="w-100" />
                    </div>
                    <div className="col-sm-10 py-4 py-md-5 my-md-4">
                        <img src={stepjonurey2} className="w-100" />
                    </div>
                    <div className="col-sm-10 text-center py-4 py-5">
                        <img src={flagDivider} className="w-auto" />
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-sm-12 my-4">
                        <h2 className="heading-1">Our Impact</h2>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <h2 className="display-5 ff-scs text-cyan">9,650</h2>
                        <p className="fs-sm-23">Mentors</p>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <h2 className="display-5 ff-scs text-cyan">31,000</h2>
                        <p className="fs-sm-23">Mentors</p>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <h2 className="display-5 ff-scs text-cyan">
                            1 lac
                            <strong className="fw-bold text-yellow">+</strong>
                        </h2>
                        <p className="fs-sm-23">Calls Made</p>
                    </div>
                    <div className="col-6 col-lg-3 mt-3">
                        <h2 className="display-5 ff-scs text-cyan">
                            10 lac
                            <strong className="fw-bold text-yellow">+</strong>
                        </h2>
                        <p className="fs-sm-23">
                            Minutes dedicated to Mentoring
                        </p>
                    </div>

                    <div className="col-sm-10 text-center py-4 py-5">
                        <img src={flagDivider} className="w-auto" />
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4 py-md-5">
                <div className="row justify-content-center position-relative">
                    <div className="col-sm-12 text-center my-4">
                        <h2 className="heading-1">Stories of Change</h2>
                    </div>
                    <div className="col-sm-10 my-4">
                        <div className="text-center">
                            <img src={story1} className="mw-100 w-auto" />
                        </div>
                        <h2 className="heading-2 mt-4 mt-md-5 mb-3">
                            1. A Story of Mentor and mentee’s relation
                        </h2>
                        <div className="common-box p-3 p-sm-4 p-md-5">
                            <p className="m-0 fs-sm-23">
                                Mitashi , a teacher by profession, started her
                                journey with 5 mentees. Over the period of time
                                they got so connected with each other, that all
                                of them helped each other in different
                                scenarios.
                                <br />
                                <br />
                                During the second lockdown, when we all were
                                concerned about our close ones' well-being,
                                Mitashi was worried about her mentee's mental
                                health. She started playing online games with
                                her mentees, being a teacher by profession she
                                even started group studies google meet, in order
                                to help them to cope up with their mental health
                                and keep them up with their studies.
                            </p>
                        </div>
                    </div>
                    <img src={yellowCircle} className="shape shape-10" />
                    <img src={lightyellowdiamond} className="shape shape-11" />
                </div>

                <div className="row justify-content-center mt-5 pt-md-5 position-relative">
                    <img src={blueDots} className="shape shape-12" />
                    <div className="col-sm-10 my-4">
                        <div className="text-center">
                            <img src={story2} className="mw-100 w-auto" />
                        </div>
                        <h2 className="heading-2 mt-4 mt-md-5 mb-3">
                            2. Story of Community Engagement:
                        </h2>
                        <div className="common-box p-3 p-sm-4 p-md-5">
                            <p className="m-0 fs-sm-23">
                                Mentors who were part of the YFE pilot journey,
                                they started interacting with each other. Some
                                of them who were preparing for Civil services,
                                formed their groups, where they used to discuss
                                current affairs, discussions related to
                                different government schemes and even conducted
                                their own group interviews.
                                <br />
                                <br />
                                Others helped each other with booking
                                vaccination slots, helping their mentees in
                                ration collection from school.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
