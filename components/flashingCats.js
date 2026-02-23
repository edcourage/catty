import React from 'react'

// Static cat data that doesn't change
const CATS_DATA = [
  { id: 1, name: "Whiskers", color: "#FF6B6B" },
  { id: 2, name: "Mittens", color: "#4ECDC4" },
  { id: 3, name: "Shadow", color: "#95E1D3" },
  { id: 4, name: "Tiger", color: "#F38181" },
  { id: 5, name: "Luna", color: "#AA96DA" },
  { id: 6, name: "Simba", color: "#FCBAD3" }
];

class FlashingCats extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.loadingTimeout = null;
  }

  componentDidMount(){
    // Simulate loading delay
    this.loadingTimeout = setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
  }

  componentWillUnmount(){
    // Clear timeout to prevent memory leaks
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .flashing-cats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .cat-card {
            text-align: center;
            animation: flash 2s infinite;
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .cat-card:nth-child(2) {
            animation-delay: 0.3s;
          }

          .cat-card:nth-child(3) {
            animation-delay: 0.6s;
          }

          .cat-card:nth-child(4) {
            animation-delay: 0.9s;
          }

          .cat-card:nth-child(5) {
            animation-delay: 1.2s;
          }

          .cat-card:nth-child(6) {
            animation-delay: 1.5s;
          }

          .cat-emoji {
            font-size: 100px;
            margin: 20px 0;
            display: block;
          }

          .cat-name {
            margin-top: 10px;
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }

          @keyframes flash {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(0.95);
            }
          }

          .loading {
            text-align: center;
            padding: 40px;
            font-size: 24px;
            color: #666;
          }

          @media (max-width: 768px) {
            .flashing-cats-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .flashing-cats-container {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        {!this.state.loaded ? (
          <div className="loading">
            <h4>Loading flashing cats...</h4>
          </div>
        ) : (
          <div className="flashing-cats-container">
            {CATS_DATA.map((cat) => (
              <div key={cat.id} className="cat-card" style={{backgroundColor: cat.color}}>
                <span className="cat-emoji">🐱</span>
                <div className="cat-name">{cat.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default FlashingCats;
