import React from 'react';

const DataScience = () => {

    const cardsData = [
        {
          image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg", 
          title: "Introduction to Data Science: Concepts and Applications",
          author: "Alice Walker",
          date: "December 15, 2024",
        },
        {
          image: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/data-science.jpg", 
          title: "Big Data Processing: Techniques and Tools for Large Datasets",
          author: "Diana Garcia",
          date: "September 30, 2024",
        },
        {
          image: "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/06/iStock-1221293664-1-1-1.jpg", 
          title: "Data Science Careers: Opportunities and Skills Required",
          author: "Emily Moore",
          date: "August 10, 2024",
        },
      ];
    return (
        <div className="fluid-container">
        <div className="row justify-content-center align-items-end">
          {cardsData.map((card, index) => (
            <div key={index} className="col g-5">
              <div className="card  ">
                <a href="" className="card-img-top">
                  <img
                    src={card.image}
                    alt={card.title}
                    width="600"
                    height="314"
                  />
                </a>
                <div className="card-body" id="card-details">
                  <a
                    className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    href=""
                  >
                    {card.title}
                  </a>
                  <p className="card-author mt-2 mb-0">
                    <span id="by">By</span>{" "}
                    <a className="text-decoration-none" href="">
                      {card.author}
                    </a>
                  </p>
                  <div id="card-footer" className="mt-2">
                    <p className="mb-0 card-text">{card.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default DataScience;