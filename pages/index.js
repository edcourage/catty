import Link from 'next/link';
import React from 'react'
import FlashingCats from '../components/flashingCats'
export default function Index() {
return (
  <div>
    <style jsx>{`
      .container {
        font-family: Arial, sans-serif;
        text-align: center;
      }
      h1 {
        font-size: 48px;
        margin: 20px 0;
        color: #FF6B6B;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
      h2 {
        font-size: 24px;
        color: #4ECDC4;
        margin: 20px 0;
      }
    `}</style>
    <div className="container">
      <h1>✨ Catty ✨</h1>
      <h2>Enjoy the flashing cats!</h2>
      <FlashingCats/>
    </div>
  </div>
  )
}
