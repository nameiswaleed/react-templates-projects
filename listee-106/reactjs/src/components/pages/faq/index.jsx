import React, { useState } from "react";
import Header from "../../home/header";
import Footer from "../../home/footer/Footer";
import { Link, useLocation } from "react-router-dom";



const Faq = () => {
    const [change,setChange]=useState(false);
    const [change1,setChange1]=useState(false);
    const [change2,setChange2]=useState(false);
    const [change3,setChange3]=useState(false);
    const [change4,setChange4]=useState(false);
    const [change5,setChange5]=useState(false);
    const [change6,setChange6]=useState(false);
    const [change7,setChange7]=useState(false);

    const parms=useLocation().pathname
    return (
        <>
            <Header parms={parms}/>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Frequently Asked Questions</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        FAQ
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="faq-info">
                        <div className="page-title ">
                            <h2 className="mt-0">Payments</h2>
                        </div>
                        <div className="faq-card" onClick={()=>setChange(!change)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqOne"
                                    aria-expanded="false"
                                    
                                >
                                    Why won’t my payment go through?
                                </Link>
                            </h4>
                            <div id="faqOne" className={`card-collapse collapse ${change===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    placerat bibendum ligula ac facilisis. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    Mauris consectetur, metus vel tincidunt scelerisque, quam diam
                                    faucibus est, ut viverra lectus odio non ante. Donec enim nisi,
                                    porttitor eu odio ac, sodales consequat lectus. Nunc pulvinar
                                    posuere metus ac laoreet. Nunc lacinia diam ut pulvinar porttitor.
                                    Cras quis ultrices tellus, id posuere turpis. Integer eget diam et
                                    metus dignissim pharetra sed ut mi. Integer volutpat odio sed odio
                                    feugiat finibus. Pellentesque quis purus vitae dolor elementum
                                    elementum eu ac ante. Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus. Aliquam at neque a lorem auctor sagittis
                                </p>
                                <p className="border border-0">
                                    Mauris vestibulum lorem a condimentum vulputate. Integer vitae
                                    turpis turpis. Cras at tincidunt urna. Aenean leo justo, congue et
                                    felis a, elementum rutrum felis. Fusce rutrum ipsum eu pretium
                                    faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et
                                    ultrices posuere cubilia curae; Integer dolor odio, iaculis nec
                                    tincidunt vel, dapibus a nisl. In feugiat maximus eros, id
                                    sollicitudin quam sagittis nec.p&gt;
                                </p>
                            </div>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange1(!change1)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqTwo"
                                    aria-expanded="false"
                                >
                                    How to I get a refund?
                                </Link>
                            </h4>
                            <div id="faqTwo" className={`card-collapse collapse ${change1===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange2(!change2)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqThree"
                                    aria-expanded="false"
                                >
                                    How do I redeem a coupon?
                                </Link>
                            </h4>
                            <div id="faqThree" className={`card-collapse collapse ${change2===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="faq-card mb-0"  onClick={()=>setChange3(!change3)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqFour"
                                    aria-expanded="false"
                                >
                                    How do I change Account Profile Name
                                </Link>
                            </h4>
                            <div id="faqFour" className={`card-collapse collapse ${change3===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="page-title">
                            <h2>Suggestions</h2>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange4(!change4)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqFive"
                                    aria-expanded="false"
                                >
                                    Why won’t my payment go through?
                                </Link>
                            </h4>
                            <div id="faqFive" className={`card-collapse collapse ${change4===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange5(!change5)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqSix"
                                    aria-expanded="false"
                                >
                                    How to I get a refund?
                                </Link>
                            </h4>
                            <div id="faqSix" className={`card-collapse collapse ${change5===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange6(!change6)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqSeven"
                                    aria-expanded="false"
                                >
                                    How do I redeem a coupon?
                                </Link>
                            </h4>
                            <div id="faqSeven" className={`card-collapse collapse ${change6===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className="faq-card"  onClick={()=>setChange7(!change7)}>
                            <h4 className="faq-title">
                                <Link
                                    className="collapsed"
                                    data-bs-toggle="collapse"
                                    to="#faqEight"
                                    aria-expanded="false"
                                >
                                    How do I change Account Profile Name
                                </Link>
                            </h4>
                            <div id="faqEight" className={`card-collapse collapse ${change7===true?"show ":""}`}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /FAQ Section */}
            <Footer />
        </>

    );
}
export default Faq;