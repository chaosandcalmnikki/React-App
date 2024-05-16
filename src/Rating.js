import Star from "./assests/star.svg"
import EmptyStar from "./assests/emptystar.svg"


function Rating({rating,date}) {
  let array = [];
  let stars =Math.round(rating/2);
  let emptystar = 5-stars;
  while(stars>0){
    array.push(Star);
    --stars;
  }
  while(emptystar>0){
    array.push(EmptyStar);
    --emptystar;
  }
  console.log(array)
  return (
    <div className="ratingbox">
    {array.map((item)=><img src={item}/>)}
    <div className="date">
        {date}
        </div>
    </div>
    
  );
}

export default Rating;