import "./Main.css";

import logo from "../../assets/logo.png";
import png1 from "../../assets/png1.jpg";
import png2 from "../../assets/png2.jpg";
import png3 from "../../assets/png3.jpg";
import png4 from "../../assets/png4.jpg";
import png5 from "../../assets/png5.jpg";
import avatar from "../../assets/avatar.svg";
import Calendars from "../../calendar"

const Main = () => {
  return (
    <main>
      <div className="main__container">
      
        <div className="chartss" >
          <div className="charts__left">
          <div className="main__title">
          
          <div className="main__greeting">
           <h4>
             Hello Mr Smith!
           </h4>
            <p>Today you have 9 new applications.<br/>
              Also you need to hire ROR Developer , React.JS<br/>
              Developer
          </p>
          <button className="buttons">Read More</button>
          </div>
        </div>
          </div>
                 <div className="charts__right">
                 <Calendars/>
                 </div>
        
        </div>
        <div className="charts">
          <div className="charts__lefts">
           <table>
             <thead>
             <tr>
                  <th className="mains">Full Name</th>
                  <th className="mainss">Designation</th>
                  <th  className="mainsss">Status</th>
             </tr>
             </thead><br/>
             <tbody>
             <tr >
 
      <td>
        <div className="td-containar">
        <img src={logo} alt="logo" />
        <div>Waston M.</div></div></td>
      <td className="mainss">Project Manager</td>
      <td  className="mainsss">Final Interview</td>
      <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
    </tr><br/>
    <tr >
   
   <td>
     <div className="td-containar">
     <img src={png1} alt="logo" />
     <div>Jonny Vartan</div></div></td>
   <td className="mainss">IOS Developer</td>
   <td  className="mainsss">Task</td>
   <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
 </tr><br/>
 <tr >   
   <td>
     <div className="td-containar">
     <img src={png2} alt="logo" />
     <div>Vikkey Set</div></div></td>
   <td className="mainss">React Developer</td>
   <td  className="mainsss">Resume Review</td>
   <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
 </tr><br/>
 <tr > 
   <td>
     <div className="td-containar">
     <img src={png3} alt="logo" />
     <div>Jon Carter</div></div></td>
   <td className="mainss">Node Developer</td>
   <td  className="mainsss">Task</td>
   <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
 </tr><br/>
 <tr >  
   <td>
     <div className="td-containar">
     <img src={png4} alt="logo" />
     <div>Radhika Vashisht</div></div></td>
   <td className="mainss">React Developer</td>
   <td  className="mainsss">Resume View</td>
   <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
 </tr><br/>
 <tr > 
   <td>
     <div className="td-containar">
     <img src={png5} alt="logo" />
     <div>Marry Jain</div></div></td>
   <td className="mainss">Angular Developer</td>
   <td  className="mainsss">Task</td>
   <td  className="mainsss"><i className="fal fa-ellipsis-h"></i></td>
 </tr> 
             </tbody>
           </table>
          </div>
        <div className="charts__right">
            <div className="charts__right__title">           
            </div>
            <div className="charts__right__cards">
               <div>
              <img className="card1"src={png1} alt="logo" />
              </div>
            </div>
            <div className="names">
                <h3>Mr Smith</h3>
              </div >
              <div className="senior">
                <p>Sr HR Manager</p>
              </div><br/>
            <div className="">
                <span className="right-icon">
                <i className="fal fa-phone-alt"></i>
              </span>
               <span className="right-icon1">
              <i className="fal fa-envelope"></i>      
              </span>
              <span className="right-icon2">
              <i className="fal fa-comment-alt"></i>
               </span>
               </div><br/>
               <span>
                <span className="texts">
                   Company
                 </span>
                 <span className="inner">FoxHr Pvt Ltd</span>
               </span><br/><br/>
               <span>
                <span className="texts">
                   Joining Date
                 </span>
                 <span className="inners">01/09/2018</span>
               </span><br/><br/>
               <span>
                <span className="texts">
                   Projects
                 </span>
                 <span className="innerss">34 Active</span>
               </span><br/><br/>
              
          </div>
        </div>
      
      </div>
    </main>
  );
};

export default Main;
