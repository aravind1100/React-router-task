import React from "react";

const cardsData = [
    {
        image:
          "https://www.learningexplorer.org/wp-content/uploads/2019/02/3-brilliant-hacks-that-will-help-you-learn-english-fast.jpg",
        title: "Learn to communicate better and better",
        author: "William Shakespeare",
        date: "03 Oct, 1964",
      },
  {
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-600x314.png",
    title: "Top 100 Crazy Project Ideas For College Students",
    author: "Albert Einstein",
    date: "01 Mar, 2024",
  },
  
  {
    image:
      "https://lh5.googleusercontent.com/proxy/8UC9vFS9SUNhz3jzQTXWmurt6oP2eYwlL7iY2FuRpn_RGHcX_KtPggnaprfmFSlY1SO9lGScxM0hNWcHTFyyOXlcD4VGJjsrD7Y6H7EJf4c40vB7AuthkE6m3WwApdk",
    title: "How to Focus in Life like a Legend",
    author: "Issac Newton",
    date: "09 Jan, 2000",
  }
  
];

const Career = () => {
  return (
    <div className="fluid-container">
      <div className="row justify-content-center align-items-end">
        {cardsData.map((card, index) => (
          <div key={index} className="col g-5">
            <div className="card ">
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

export default Career;
