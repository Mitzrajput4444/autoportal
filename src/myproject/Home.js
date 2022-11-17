import React from "react";
import { useEffect,useState } from "react";
export default function Home() {
  const [dateState, useDateState] = useState(new Date());
  const d = new Date();
   
    function TopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log("hi");
    }
    
    return (
        <>
<div>
  <div className="w3l-banner py-2">
    <div className="container py-lg-3 py-md-3">
      <div className="ban-content-inf row py-lg-3">
        <div className="maghny-gd-1 col-lg-8">
          <div className="maghny-grid">
            <figure className="effect-lily border-radius">
              <img className="img-fluid radius-image" src="myassest/images/1.jpg" alt />
              <figcaption className="w3set-hny">
                <div className="info">
                  <a href="#reciepe" className="receipe">News</a>
                  <h4 className="top-text">The top 10 fuel economy cars in the Indian automotive market</h4>
                  <p className="mt-2 d-sm-block d-none">Tata Nexon electric vehicle experiential drives organised at the fourth edition of Godrej L’Affaire.</p>
                  <div className="p-footer">
                    <aside className="p-meta-info">
                      <a href="#img" className="post-img-anchor">
                        <img src="myassest/images/a1.jpg" alt className="post-img" />
                      </a>
                      <a href="#url">Elon musk</a>
                      <span className="meta-info-date fa-duotone fa-calendars">
                     {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                        <span/>  <span className="fa fa-clock-o "> {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
              })}</span>
                      </span>
                    </aside>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
          <div className="maghny-gd-1">
            <div className="maghny-grid">
              <figure className="effect-lily border-radius">
                <img className="img-fluid radius-image" src="myassest/images/2.jpg" alt />
                <figcaption>
                  <div>
                    <h4 className="top-text1">Autoportal- Buy Car in India at Best Price</h4>
                    <aside className="p-meta-info">
                      <span className="meta-info-el meta-info-custom">
                        <span className="" />Buy car that you saw in your dreams! In India, buying a car is considered as an investment instead of expense. We want best car prices. 
                      </span>
                    </aside>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="maghny-gd-1 mt-lg-4">
            <div className="maghny-grid">
              <figure className="effect-lily border-radius">
                <img className="img-fluid radius-image" src="myassest/images/3.jpg" alt />
                <figcaption>
                  <div>
                    <h4 className="top-text1 top-p">Sell and Buy Cars Online- India’s New Car Dealing Approach</h4>
                    <aside className="p-meta-info">
                      <span className="meta-info-el meta-info-custom">
                      <a> <span className="fa fa-bell-o mr-2" />Sponsered by 
                        <strong style={{color:'red'}}> MiT's Rajput</strong></a> 
                      </span>
                    </aside>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ad-image text-center pb-lg-5">
    <div className="container outerborder">
      
      <a className="widget-ad-link" target="_blank" href="#url">
        <img src="myassest/images/ad.jpg" alt="- Advertisement -" className="radius-image img-fluid" /></a>
    </div>
  </div>

 
  <button onClick={TopFunction} id="movetop" title="Go to top">
    ⤴
  </button>
</div>

        </>
    )
}