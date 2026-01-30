const Viewer = ({ count }) => {
  return (
    <div>
      <div className="viewer-label">현재 카운트</div>
      <h1 className="viewer-count">{count}</h1>
    </div>
  );
};

export default Viewer;
