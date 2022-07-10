import React from "react";
import oxmock from "../Images/oxmock.png";
import dorecall from "../Images/recall.png";
import qmeal from "../Images/qmeal.png";
import expense from "../Images/expense.png";

const Work = () => {
  return (
    <div className="work">
      <div className="work-header">
        <h1>Projects</h1>
      </div>
      <div className="project-list">
        <li className="each-project">
          <div className="card">
            <div className="card-header">Recall app</div>
            <div className="card-body">
              <p>
                This App is especially build for People suffering from dementia.
                If you forget things easily then this app is for you. Build with
                React and express.
              </p>
              <img className="project-img" src={dorecall} alt="" />
            </div>
            <div className="card-footer">
              <div className="links">
                <a
                  href="https://github.com/Easyvipin/Recall-app"
                  target="blank"
                >
                  <i className="fab fa-github" title="Source code"></i>
                </a>
                <a href="https://dorecall.herokuapp.com/" target="blank">
                  <i className="fas fa-fire" title="Run Recall"></i>
                </a>
              </div>
              <div className="time"> 26 May 2020</div>
            </div>
          </div>
        </li>
        <li className="each-project">
          <div className="card left-format">
            <div className="card-header">Oxhelp</div>
            <div className="card-body ">
              <p>
                Helpline directory of Oxygen Suppliers in INDIA (Build with
                MERN). Just a little help to helpless covid patients by
                providing them a single platform to search for oxygen suppliers.
              </p>
              <img className="project-img" src={oxmock} alt="" />
            </div>
            <div className="card-footer">
              <div className="links">
                <a href="https://github.com/Easyvipin/oxhelp" target="blank">
                  <i className="fab fa-github" title="source code"></i>
                </a>
                <a href="https://oxhelp.herokuapp.com/" target="blank">
                  <i className="fas fa-fire" title="Run Oxhelp"></i>
                </a>
              </div>
              <div className="time">2 May 2021</div>
            </div>
          </div>
        </li>
        <li className="each-project">
          <div className="card">
            <div className="card-header">Qmeal</div>
            <div className="card-body">
              <p>
                Find your next meal to cook filtered by your selected cuisines
                powered wih food Apis.This App is Build with simple Html/css
                ,Javascript.
              </p>
              <img className="project-img lap" src={qmeal} alt="" />
            </div>
            <div className="card-footer">
              <div className="links">
                <a href="https://github.com/Easyvipin/Qmeal" target="blank">
                  <i className="fab fa-github" title="source code"></i>
                </a>
                <a href="https://easyvipin.github.io/Qmeal/" target="blank">
                  <i className="fas fa-fire" title="Run Qmeal"></i>
                </a>
              </div>
              <div className="time">30 Sept 2020</div>
            </div>
          </div>
        </li>
        <li className="each-project">
          <div className="card left-format">
            <div className="card-header">Expense Monitor</div>
            <div className="card-body">
              <p>
                React app helps the user to manage their monthly Expenses and
                also show them how much they will save as they input their
                expense from their Monthly income.
              </p>
              <img className="project-img lap" src={expense} alt="" />
            </div>
            <div className="card-footer">
              <div className="links">
                <a
                  href="https://github.com/Easyvipin/Expense-monitor"
                  target="blank"
                >
                  <i className="fab fa-github" title="Source Code"></i>
                </a>
                <a
                  href="https://easyvipin.github.io/Expense-monitor/"
                  target="blank"
                >
                  <i className="fas fa-fire" title="Run Monitor"></i>
                </a>
              </div>
              <div className="time">25 Jun 2020</div>
            </div>
          </div>
        </li>
      </div>
      <a href="https://github.com/Easyvipin" target="blank" className="btn">
        More Projects &#8594;
      </a>
    </div>
  );
};

export default Work;
