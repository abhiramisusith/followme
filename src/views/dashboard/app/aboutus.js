import React from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import '../../../assets/css/aboutus.css';
//profile-header
import ProfileHeader from "../../../components/profile-header";
import CountUp from 'react-countup';


////img

import accountconnection from "../../../assets/images/accountconnection.jpg";
import orders from "../../../assets/images/orders.jpg";
import trade from "../../../assets/images/trade.png";
import img52 from "../../../assets/images/page-img/52.jpg";
import img53 from "../../../assets/images/page-img/53.jpg";
import img54 from "../../../assets/images/page-img/54.jpg";
import img5 from "../../../assets/images/page-img/profile-bg1.jpg";
import { display } from "@mui/system";

const Aboutus = () => {
  return (
    <>
      <ProfileHeader title="About Us" img={img5} />
      <div id="aboutus-page" className="aboutus-page">
        <Container>
        <Row className="mt-4">
          <Col lg="4">
            <Card className="d-flex flex-row" >
           
            <i className="las la-user-alt" id="iconcounter"></i>
            <div  style={{fontSize:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginLeft:"30px"}} >
          <CountUp
          start={0}
          end={147}
          duration={8} 
          style={{fontSize:"30px",fontWeight:"600",color:"red"}}
        /> 
        <p style={{fontSize:"10px"}}>Connected Accounts</p>
        </div>
        </Card  >
        </Col>
        <Col lg="4">
            <Card className="d-flex flex-row" >
            
            <i className="las la-sort-amount-up" id="iconcounter"></i>
            <div style={{fontSize:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginLeft:"30px"}} >
          <CountUp
          start={0}
          end={3052}
          duration={8} 
          style={{fontSize:"30px",fontWeight:"600",color:"red"}}
        /> 
        <p style={{fontSize:"10px"}}>Number of Orders</p>
        </div>
        </Card  >
        </Col>
        <Col lg="4">
            <Card className="d-flex flex-row" >
            
            <i className="las la-chart-line" id="iconcounter"></i>
            <div style={{fontSize:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginLeft:"30px"}} >
          <CountUp
          start={0}
          end={852}
          duration={8} 
          style={{fontSize:"30px",fontWeight:"600",color:"red"}}
        /> 
        <p style={{fontSize:"10px"}}>Trading Volume (USD)</p>
        </div>
        </Card  >
        </Col>
          </Row>
          <Row>
          
            <div className="col-lg-12 col-md-12 mt-5" >
              <div className="user-images position-relative overflow-hidden mb-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com"
                    title="v1"
                  ></iframe>
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <div className="para-aboutus text-align-center mt-4 mb-4">
              <h1 className="text-center">About us</h1>
              <p id="longpara" >
                Blue bridge is a IT company, setup by a team of tech savvy
                programmers in 2021. We provide an open community trading
                platform where Traders or Investors around the world can post
                and share in real-time, their trading strategies, ideas and
                experiences. These traders hold real trading accounts with any
                of the 3,000 dealers or brokers who are connected onto our
                system. Other users can join as Followers to take advantage of
                the sharing of those strategies and ideas by the more
                experienced traders or investors. They can utilise our powerful
                in-built trading tool - COPYTRADE, to automatically copy a
                particular trader’s transaction. Followers can freely decide and
                set their trading preference as to how much investment they like
                to copy. Every trader’s activities are recorded and published
                systematically and presented in a comprehensive format to allow
                easy access to Followers. Currently, this platform has garnered a lot 
                 registered users worldwide and we will continue to
                innovate and strive to evolve and become the most popular
                community trading platform globally. Let’s trade with clarity
                and ease where technology can help traders achieve supreme
                success.
              </p>
            </div>
            
            </Row>
            <Row>

            <Col lg="4"  >
              <Card className="vision "  >
              
              <div className=" mb-3 mt-3 text-center">
              <i className="las la-mountain mb-1" id="icon"></i>
              <p>To become the World most popular trading community platform.</p>
              <p>-Vision</p>
              
            </div>
           
              </Card>
            </Col>
            <Col lg="4" >
              <Card className="mission" >
              
              <div className=" mt-3 mb-3 text-center">
              <i className="las la-trophy mb-1" id="icon"></i>
              <p>Make trading easier and more transparent</p>
              <p>-Mission</p>
              
            </div>
           
              </Card>
            </Col>
            <Col lg="4" >
              <Card className="concept" >
              
              <div className="mt-3 mb-3 text-center">
              <i className="las la-plane mb-1" id="icon"></i>
                <p>User first, tech for good.</p>
                <p>-Concept</p>
              </div>
            
           
              </Card>
            </Col>
          </Row>
          
           
          
          <Row className="justify-content-center mt-4">
            <Col lg="12">
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <div className="header-title">
                    <h2 className="card-title text-primary ">Roadmap</h2>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="iq-timeline ms-1">
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="mb-1 text-success">2021</h4>
                      </div>
                      <div className="d-inline-block w-100">
                        <p id="roadmap">
                        started the project
                        </p>

                        <p id="roadmap">• Under development</p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2020</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • As of December, we’ve more than 730,000 registered
                          users, 58 million orders, and 8.6 billion trading
                          volumes.
                        </p>

                        <p>
                          • imTrader S7 in November exceeded 3,500 participants
                          and 33 million USD in funds.
                        </p>
                        <p>
                          • FOLLOWME launched 5.0 version with an upgraded
                          global brand image in May.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2019</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • FOLLOWME 5.0 product launch conference was held in
                          December.
                        </p>

                        <p>
                          • FOLLOWME English Version and FOLLOWME Traditional
                          Chinese Version and APP Version 4.3 were officially
                          launched in January{" "}
                        </p>
                        <p>
                          • Launched products: IM, FOLLOWCOIN and FOLLOWRANK.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2018</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • There were more than 200,000 registered users,
                          140,000 active accounts. Trading orders has exceeded
                          15 million in December.
                        </p>
                        <p>
                          {" "}
                          • Launched products in March: MAM Strategy,
                          FOLLOWGUARD 2.0 and Strategy Community.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2017</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • Registered users has exceeded 130,000 in December.
                        </p>
                        <p>
                          {" "}
                          • FOLLOWME 3.0 product launch conference was held in
                          November{" "}
                        </p>
                        <p>
                          • Launched products: SAM Public Platform and Data
                          Analysis System{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2016</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • There were more than 60,000 registered users in
                          September
                        </p>
                        <p> • FOLLOWME's Version 2.0 was launched in July </p>
                        <p>
                          • Launched products: Multi-account System, FOLLOWTRADE
                          and Community{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-dots"></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">2015</h5>
                      </div>
                      <div className="d-inline-block w-100">
                        <p>
                          • FOLLOWME's Version 1.0 Web and APP were launched in
                          August
                        </p>
                        <p>• Birth of FOLLOWME</p>
                      </div>
                    </li> */}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <h2 className="text-center mt-4 mb-4">Products</h2>
            <Col lg="3"id="productcol" className="product">
              <Card id="card" >
              <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-ecommerce-kiranshastry-solid-kiranshastry.png"/>
                <h4 className="text-center  mt-3 ">Search Engine</h4>
                <p className="m-1 text-sm text-left" id="aboutpara" >
                  CFD trading, margin trading and other vertical areas of the
                  entire network content collection
                </p>
                <p className="text-sm text-center">-Community-</p>
              </Card>
            </Col>
            <Col lg="3" id="productcol"className="product">
              <Card id="card" >
              <img id="icon" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-bulb-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png"/>
                <h4 className="text-center  mt-3 " > AI Content Engine</h4>
                <p className="m-1 text-sm text-left" id="aboutpara">
                  recommend personalized content according to the user's
                  behavior and habits, the content recommendation is precise and
                  refined that is customized for each individual.
                </p>
                <p className=" text-sm text-center ">-Community-</p>
              </Card>
            </Col>
            <Col lg="3" id="productcol"className="product">
              <Card id="card" >
              
              <img id="icon" src="https://img.icons8.com/external-outline-satawat-anukul/50/000000/external-trading-trading-outline-style-outline-satawat-anukul-51.png"/>
                <h4 className="text-center  mt-3 " >COPYTRADE</h4>
                <p className="m-1 text-sm text-left" id="aboutpara">
                  Support to connect more than 3,000 traders worldwide. When the
                  trading account is connected with FOLLOWME, users can
                  automatically copy the transaction through COPYTRADE. There
                  are two connection methods: MANAGER API and CLIENT API.
                </p>
                <p className=" text-sm text-center ">-Trades-</p>
              </Card>
            </Col>
            
            <Col lg="3" id="productcol"className="product">
              <Card id="card" >
              
              <img src="https://img.icons8.com/ios/50/000000/card-security.png" id="icon"/>
                <h4 className="text-center  mt-3 ">FOLLOWQUANT</h4>
                <p className="m-1 text-sm text-left"id="aboutpara">
                A quantitative analysis system, which builds an analytical model basing on more than 10 million pieces of users' data per day in FOLLOWME. The user's social characteristics and trading habits are complied in this analysis.


                </p>
                <p className="text-sm text-center">-Trades-</p>
              </Card>
            </Col>
            <Col lg="3" id="productcol"className="product">
              <Card id="card" >
              <img id="icon" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-transaction-accounting-and-finance-flatart-icons-outline-flatarticons.png"/>
                <h4 className="text-center  mt-3 ">FOLLOWGUARD</h4>
                <p className=" m-1 text-sm text-left" id="aboutpara">
                  After the trading account is connected with FOLLOWME, users
                  can enable FOLLOWGUARD to monitor the account status in real
                  time, including: equity, orders, stop loss and take profit
                </p>
                <p className=" text-sm text-center">-Trades-</p>
              </Card>
            </Col>
          </Row>
          <Row>
          <Card className="d-flex flex-row align-items-center justify-content-center mt-4">
          <Col lg="3" className="m-3 text-center">
           
            <h4>Careers</h4>
            <a href="#"id="link" >Learn More<i className="las la-angle-right"></i></a>
                   
          </Col>
          <Col lg="3" className="m-3 text-center">
           
          <h4>Contact Us</h4>
          <a href="#"id="link">Learn More<i className="las la-angle-right"></i> </a>
                   
          </Col>
          <Col lg="3" className="m-3 text-center">
           
          <h4>Help Center</h4>
          <a href="#"id="link">Learn More<i className="las la-angle-right"></i> </a>
                   
          </Col>
          </Card> 

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
