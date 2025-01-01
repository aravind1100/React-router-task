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
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col col-12 col-lg-6 col-xxl-4 g-5 ">
                <div className="card">
                  
                  <img src={card.image} alt={card.title} className="card-img-top" />
                  <div className="card-body">
                    <a
                      href=""
                      className="card-title text-decoration-none text-dark fs-5 fw-semibold"
                    >
                      {card.title}
                    </a>
                    <p className="card-author mt-2 mb-0">
                      <span>By</span>{" "}
                      <a className="text-decoration-none" href="">
                        {card.author}
                      </a>
                    </p>
                    <p className="card-text mt-2 mb-0">{card.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default DataScience;