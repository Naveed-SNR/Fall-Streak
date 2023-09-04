

export default function Highlights() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="team">
      <h3 className="w3-center">HIGHLIGHTS</h3>
      <p className="w3-center w3-large">Take a peek at the paradise on earth</p>
      <div className="w3-row-padding" style={{ marginTop: '64px' }}>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-card">
            <img src="./src/assets/images/Card1.webp" className="img-fluid" alt="John" style={{ width: '100%', height: '481px' }} />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-card aspect-ratio">
            <div className="aspect-ratio">
              <img src="./src/assets/images/Card2.webp" className="img-fluid" alt="Jane" style={{ width: '100%', height: '481px' }} />
            </div>
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-card">
            <img src="./src/assets/images/Card3.webp" className="img-fluid" alt="Mike" style={{ width: '100%', height: '481px' }} />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-card">
            <img src="./src/assets/images/Card4.webp" className="img-fluid" alt="Dan" style={{ width: '100%', height: '481px' }} />
          </div>
        </div>
        <p className="w3-center"><a href="#work" className="w3-button w3-black w3-round mt-4 p4"><i className="fa fa-th"></i> View All</a></p>
      </div>
    </div>
  );
};

