function ReviewHighlighter({comments, highlights=[], category}) {
    console.log(comments);
  const parts = [];
  let lastIndex = 0;
  highlights.forEach((indices, index) => {
    parts.push(
      <span>
        {comments.substring(lastIndex, indices[0])}
      </span>
    );
    parts.push(
      <span className="tooltip" style={{ backgroundColor: `${indices[2]==="Positive"?"#D9F2DD":indices[2]==="Negative"?"#F2DBD9":indices[2]==="Mixed"?"#e8bd6d3d":indices[2]==="Mixed"?"#eaf09b6bs":'' } `} }>
        {comments.substring(indices[0], indices[1])}
        <span class="tooltiptext">{category}</span>
      </span>
    );
    lastIndex = indices[1];
  });
  parts.push(
    <span key="part-last">{comments.substring(lastIndex)}</span>
  );

  return (
    <>{parts}</>
  );
}

export default ReviewHighlighter;