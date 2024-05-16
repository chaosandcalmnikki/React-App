import { review_data } from './reviews_data';
import Add from "./assests/add.svg"
import Bookmark from "./assests/bookmark.svg"
import Menu from "./assests/menu.svg"
import Rating from './Rating';
import ReviewHighlighter from './ReviewHighlighter';
function ReviewList() {
  return (
    <div className="App">
      {review_data.map((item) => <div className='listItem'>
        <div className="header">
          <div style={{ display: 'flex' }}>

            <img src={item?.source?.icon} style={{ width: '35px', padding: '0px 10px 0px 0px' }} />
            <div>
              <b>{item?.reviewer_name}</b> wrote a review on <b>{item?.source?.name}</b>
            </div>
          </div>
          <div>
            <img src={Add} />
            <img src={Bookmark} />
            <img src={Menu} />
          </div>
        </div>
        <div className="rating">
          <Rating rating={item?.rating_review_score}
            date={item?.date}/>
        </div>
        <div className="comment">
          <ReviewHighlighter comments={item?.content} highlights={item?.analytics[0]?.highlight_indices} category={item?.category} />
        </div>
      </div>
      )}
    </div>
  );
}
export default ReviewList;