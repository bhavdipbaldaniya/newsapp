import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, Date, source } =props;
    return (
      <div className="my-3 ">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",}}>
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl? "https://images.hindustantimes.com/tech/img/2023/05/18/1600x900/space-7706966_640_1684383260417_1684383267932.jpg": imageUrl}className="card-img-top"alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small className="text-body-secondary">by {!author ? "Unknown" : author} on {Date}</small>
            </p>
            <a href={newsUrl} target="-blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
