import "./main.css";
import Chart from "../charts/Chart";
import invoice from '../pics/receipt.png'
import stats from "../pics/stats.png"
import client from"../pics/clients.png"
import number from "../pics/invoice.png"
const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          {/* <img src={imge}/> */}
          <div className="main__greeting">
            <h1>Hello Folks</h1>
            <p>Welcome to the admin board</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
           
            <img className="logo2" src={invoice}/>
            <div className="card_inner">
              <p className="text-primary-p"> No of Invoices</p>
              <span className="font-bold text-title">578</span>
              
            </div>
          </div>
          <div className="card">
          <img className="logo2" src={stats}/>
            <div className="card_inner">
              <p className="text-primary-p">Late Payments</p>
              <span className="font-bold text-title">144</span>
            </div>
          </div>
          <div className="card">
          <img className="logo2" src={client}/>
            <div className="card_inner">
              <p className="text-primary-p">Number of clients</p>
              <span className="font-bold text-title">668</span>
            </div>
          </div>
          <div className="card">
          <img className="logo2" src={number}/>
            <div className="card_inner">
              <p className="text-primary-p">Cleared </p>
              <span className="font-bold text-title">3578</span>
            </div>
          </div>
        </div>
        <div className="charts">
            <div className="charts__left">
            <div className="charts__left__title">
                <div>
                    <h1>
                        Daily Payments
                    </h1>
                    <p>Bhubaneswar, Odisha ,INDIA</p>
                </div>
               <i className="fa fa-usd"></i>
            </div>
            <Chart/>
            </div>
            <div className="charts__right">
              <div className="charts__right__title">
                   <div>
                       <h1>
                           Stats Reports
                       </h1>
                       <p>Bhubaneswar, Odisha ,INDIA</p>
                   </div>
                   <i className="fa fa-use"></i>
              </div>
              <div className='charts__right__cards'>
                  <div className="card1">
                   <h1>Income</h1>
                   <p>$75,000</p>
                  </div>
                  <div className="card2">
                   <h1>Revenue</h1>
                   <p>$105,000</p>
                  </div>
                  <div className="card3">
                   <h1>Tax</h1>
                   <p>$45,000</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
