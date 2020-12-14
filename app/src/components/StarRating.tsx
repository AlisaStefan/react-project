import StarRatings from "react-star-ratings";

function StarRating(props: { rating: number }) {
  return (
    <StarRatings
      rating={props.rating}
      starRatedColor=" #0a71f5"
      starDimension="20px"
      numberOfStars={5}
      name="rating"
    />
  );
}

export default StarRating;
