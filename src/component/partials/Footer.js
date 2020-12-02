import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <p className="float-right">
          Datasource <a href="#">COVID-19 API/ Johns Hopkins CSSE</a>
        </p>
        <p>
          &copy; 2020-2021 Prince Amankwah &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </div>
    </React.Fragment>
  );
}
