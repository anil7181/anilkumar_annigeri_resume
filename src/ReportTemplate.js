// import {useState, useRef } from 'react';
// import jsPDF from 'jspdf';
// import ReportTemplate from './ReportTemplate';

// function App() {
// 	const reportTemplateRef = useRef(null);

//   const [prt, setPrt] = useState(true)



// 	const handleGeneratePdf = () => {
//     setPrt(false);
//     setTimeout(() => {
//       setPrt(true);
//     }, 3000);
    
//     setTimeout(() => {
//       window.print();
//     }, 1000);
// 	};

// 	return (
// 		<div>
//       {/* <div id="ignorePDF"></div> */}
//       {
//         prt
//         ?
//         <button className="button" onClick={()=>handleGeneratePdf()}>
//           Generate PDF
//         </button>
//         :
//         null
//       }
// 			<div ref={reportTemplateRef}>
// 				<ReportTemplate />
// 			</div>
// 		</div>
// 	);
// }

// export default App;



/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import {data} from './constant'

function ReportTemplate() {

  return (
    <>
    <div>
      <div className='a4-page-size'>
      <div className='header-section content'>
            <Row className='first-name'>
              <Col>{data.fname} </Col>
            </Row>
            <Row className='current-position'>
              <Col>{data.designation}</Col>
            </Row>
            <Row className='abt-dsc'>
              <Col>{data.description}</Col>
            </Row>
      </div>
      <div className='contact-section content'>
            <Row className='contact-section-data'>
            {
                data.contacts.map((e,i)=>{
                    return <Col sm={ e.value.length > 36 ? 12 : 6} style={{marginBottom: '7px'}}><img src={"/assets/"+e.icon+".png"} /> {" "+ e.value} </Col>
                })
            }
            </Row>
      </div>
      <div className='all-content-section content'>
          <Row className='all-content-section'>
            <Col className='experiance-section' sm={6} >
              <div className='company-sections'>
                <h5><span>WORK EXPERIENCE</span></h5>

                {
                data.workExperiance.map((data,i)=>{
                    return <>
                    <h5 className='comany-des'>{data.designation}</h5>
                    <p className='company-name'>{data.company}</p>
                    <p>
                    <Row>
                        <Col className="working-dates"><i> {data.fromDate} - {data.toDate} </i></Col>
                    </Row>
                    </p>
                    <p className="working-dates">{data.location}</p>
                    <p>{data.postion}</p>
                    <p><span className='working-dates'>Contact : </span> 
                    {data.contact_name} - {data.contact_no}
                    </p>
                    </>
                })
                }
                
              </div>
                
              {/* <div className='projects'>
                <h5><span>PROJECTS</span></h5>
                {
                    data.projects.map((e)=>{
                        return <>
                        <p className='project-name'>{e.projectName}</p>
                        {
                            e.details.map((data)=>{
                                return <p className="project-details">- {data}</p>
                            })
                        }
                        </>
                    })
                }
              </div> */}
            </Col>
            
            <Col className='experiance-section' >
              <div className='company-sections'>
                <h5><span>EDUCATION</span></h5>

                {
                    data.education.map((e)=>{
                        return <>
                            <h5 className='comany-des'>{e.courseName}</h5>
            
                            <p className='company-name'>{e.clgName}</p>
                            <p className='working-dates'><i>{e.fromYear} - {e.toYear}</i></p>
                            {/* <p className='working-dates'><i>{e.percetage}</i></p> */}
                            <p className='project-details'> {e.details}</p>
                        </>
                    })
                }

                </div>

                <div className='company-sections'>
                    <h5><span>SKILLS</span></h5>
                    <p>  
                        {
                            data.technicalSkills.map((e)=>{
                                return <Badge bg="secondary">{e}</Badge>
                            })
                        }
                    </p>
                    <p>
                    </p>
                </div>


                <div className='company-sections'>
                    <h5><span>INTERESTS</span></h5>
                    <p>  
                        {
                            data.intersts.map((e)=>{
                                return <Badge bg="light" className='intrest-data'>{e}</Badge>
                            })
                        }
                    </p>
                    <p>
                    </p>
                </div>
            </Col>
          </Row>
      </div>
      </div>

      
      <div className='a4-page-size2'>
        <div className='second-page content'>
          <Row>
            <Col>
            <div className='company-sections'>
                <h5><span>ACHIEVEMENTS</span></h5>
                {
                    data.achivements.map((e)=>{
                        return <p className="project-details">• {e}</p>
                    })
                }
                </div>

            </Col>
            <Col> 
                <div className='company-sections'>
                <h5><span>Languages</span></h5>

                {
                    data.languages.map((e)=>{
                        return <>
                        <p className="project-details">{e.name}</p>
                        <p className="working-dates lang-data">{e.details}</p>
                        </>
                    })
                }
                </div>
            </Col>
          </Row>

          <Row>
            <Col>
                
            <div className='projects'>
                <h5><span>PROJECTS</span></h5>
                {
                    data.projects2.map((e,i)=>{
                        return <>
                            <p className='project-name comany-des'>{e.projectName}</p>
                            {
                                e.details.map((data)=>{
                                    return <p className="project-details">• {data}</p>
                                })
                            }
                        </>
                    })
                }
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </>
  );
}

export default ReportTemplate;
