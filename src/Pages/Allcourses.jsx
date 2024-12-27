import React from "react";
import Career from "./Career";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import Fullstack from "./Fullstack";

const Allcourses = () => {
  const allCards = [
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
    },
    {
      image:
        "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=",
      title: "Top 10 Cybersecurity Best Practices for Businesses",
      author: "John Doe",
      date: "July 5, 2024",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
      title: "Phishing Attacks: How to Recognize and Avoid Them",
      author: "Jane Smith",
      date: "June 20, 2024",
    },
    {
      image:
        "https://i.pinimg.com/474x/b9/8c/82/b98c8212c5c012985d88ced2417e0724.jpg",
      title:
        "The Importance of Strong Passwords and Multi-Factor Authentication",
      author: "David Lee",
      date: "May 15, 2024",
    },
    {
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
      title: "Introduction to Data Science: Concepts and Applications",
      author: "Alice Walker",
      date: "December 15, 2024",
    },
    {
      image:
        "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/data-science.jpg",
      title: "Big Data Processing: Techniques and Tools for Large Datasets",
      author: "Diana Garcia",
      date: "September 30, 2024",
    },
    {
      image:
        "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/06/iStock-1221293664-1-1-1.jpg",
      title: "Data Science Careers: Opportunities and Skills Required",
      author: "Emily Moore",
      date: "August 10, 2024",
    },
    {
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png",
      title:
        "The MERN Stack: Mastering MongoDB, Express.js, React, and Node.js",
      author: "John Smith",
      date: "December 10, 2024",
    },
    {
      image: "https://www.keycdn.com/img/support/full-stack-development.png",
      title: "Building RESTful APIs with Node.js and Express.js",
      author: "Jane Doe",
      date: "November 15, 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZnPLvFFZV5j4aL4VYo4nkM8ZPc1KbXwJLQ&s",
      title: "Frontend Frameworks: React, Vue, and Angular",
      author: "David Lee",
      date: "October 25, 2024",
    }
  ];
  return (
    <div className="fluid-container">
      <div className="row justify-content-center align-items-end">
        {allCards.map((card, index) => (
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

export default Allcourses;
