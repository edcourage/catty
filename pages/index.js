import Link from 'next/link';
import React from 'react'
import RandomCat from '../components/randomCat'
export default function Index() {
return (
  <div>
    <h1> Catty </h1>
    <RandomCat/>
    <h2> Refresh for your next cat! </h2>
    </div>
    )
}
