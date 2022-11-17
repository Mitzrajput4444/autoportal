import React from "react";
import { useState } from "react";
export default function Product() {
    const [dateState, useDateState] = useState(new Date());
    const d = new Date();
     
    return (

        <>

            <div className="w3l-searchblock w3l-homeblock1 py-5">
                <div className="container py-lg-4 py-md-3">
                    <div className="row">
                        <div className="col-lg-8 most-recent pr-lg-4">
                            <h3  className="title-left mb-3">Our Happy Clients Reviews</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 item">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="myassest/images/4.jpg" alt="Card image cap" />
                                            </a>
                                           
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                           
                                            <p>This does not apply solely to customers post-purchase, but at every single point on the customer journey.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="myassest/images/a1.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Raj Mehta</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-md-0 mt-5">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="myassest/images/5.jpg" alt="Card image cap" />
                                            </a>
                                           
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                           
                                            <p>It’s incredibly rare that anyone would pick up the phone and call you up with feedback. Instead, your customers take to social media to talk about you. </p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="myassest/images/a2.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Armaan Malik</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="myassest/images/6.jpg" alt="Card image cap" />
                                            </a>
                                           
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                           
                                            <p>Make it as easy as possible for your customers to get in touch. If you don’t already, you should consider using a business texting app to reach your customers.  </p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="myassest/images/a3.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Mr Patel</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="myassest/images/7.jpg" alt="Card image cap" />
                                            </a>
                                           
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                           
                                            <p>t is great to be driving, but don’t give up on walking. Congratulations for new Honda, but I hope you don’t become a lazy panda.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="myassest/images/a4.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Jigs Suhagiya</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5 pl-lg-4">
                            <div className="pos-sticky">
                                <div className="side-post-banner text-center">
                                    <h3 className="title-left2">SALE</h3>
                                    <h3 className="title-left"> DEALS OF THE DAY UPTO 30% DISCOUNT</h3>
                                    <p className="mt-3">OFFER VALID FOR ONE DAY OR TILL NEXT STOCK LAST
                                        </p>
                                    <a href="/Signup" className="btn-style btn btn-primary mt-4"> Shop Now </a>
                                </div>
                                <div className="tweets mt-5">
                                    <h3 className="title-left mb-sm-3">Latest News</h3>
                                    <ul className="blog-cat twitter-feed">
                                        <li>
                                            <a href="#url">Volkswagen Tiguan Allspace SUV launched at INR 33.12 lakh
                                                <br /> <em className="twitter-date">
                                                    <span className="meta-info-date fa-duotone fa-calendars"/>
                     {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                      <span className="fa fa-clock-o"/> {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
              })}
                                                        </em></a>
                                        </li>
                                        <li>
                                           
                                                <a href="#url">Tata Nexon EV catapults experiential marketing to next level
                                                    <br /><em className="twitter-date">
                                                    <span className="meta-info-date fa-duotone fa-calendars"/>
                     {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                      <span  className="fa fa-clock-o"/> {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
              })}
                                                        </em></a>
                                        </li>
                                        <li>
                                            <a href="#url"> According to a report, market leader Maruti Suzuki holds 40% of the top spots in the rankings for the most fuel economy cars, which is followed by Hon...
                                                <br /><em className="twitter-date">
                                                    <span className="meta-info-date fa-duotone fa-calendars"/>
                     {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                      <span  className="fa fa-clock-o"/> {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
              })}
                                                        </em></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}