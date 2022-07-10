/* 
<div className="review-section">
        <div className="reviews">
          <div className="circle">&#x2712;</div>
          <p className="quote-review">" {review.review} "</p>
          <div className="user-review">
            <img src={user} alt="" />
            <div className="user-details">
              <h5>{review.name}</h5>
              <span>{review.profession}</span>
            </div>
          </div>
        </div>
      </div>
 */

/* useeffect 
      const [review, setReview] = React.useState({
    name: "danny",
    profession: "android dev",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      let x = Math.floor(Math.random() * 3 + 1);
      console.log(x);
      setReview(reviews[x]);
    }, 2000);

    return () => clearInterval(interval);
  });
      
      */
