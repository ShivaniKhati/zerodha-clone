import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-4 mt-md-5 mb-5">

        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* 1. Account Opening */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            Online Account Opening
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Offline Account Opening
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Company, Partnership and HUF Account Opening
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            NRI Account Opening
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Charges at Zerodha
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Getting Started
          </a>
        </div>


        {/* 2. Your Zerodha Account */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            Login Credentials
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Account Modification and Segment Addition
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            DP ID and bank details
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Your Profile
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Transfer and conversion of shares
          </a>
        </div>


        {/* 3. Kite */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-chart-bar me-2"></i>
            Kite
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            IPO
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Trading FAQs
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Margin Trading Facility (MTF) and Margins
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Charts and Orders
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Alerts and Nudges
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            General
          </a>
        </div>


        {/* 4. Funds */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-money-bill me-2"></i>
            Funds
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            Add Money
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Withdraw Money
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Add Bank Accounts
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            eMandates
          </a>
        </div>


        {/* 5. Console */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-desktop me-2"></i>
            Console
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            Portfolio
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Corporate Actions
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Funds Statement
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Reports
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Profile
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Segments
          </a>
        </div>


        {/* 6. Coin */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-coins me-2"></i>
            Coin
          </h4>

          <a href="" className="d-block text-decoration-none mb-2">
            Mutual Funds
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            National Pension Scheme (NPS)
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Fixed Deposit (FD)
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Features on Coin
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            Payments and Orders
          </a>

          <a href="" className="d-block text-decoration-none mb-2">
            General
          </a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;