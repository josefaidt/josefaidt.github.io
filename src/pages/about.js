import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
      title="Home"
    />
    <h1>About</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      Augers oats hen cowpies. Lettus gobblers pens, radish on kidney beans, llamas pick up truck.
      John Deere bees, parsley sweet corn at, porky pig shovels. Mooo cat daisys, grunt in turkey
      coo, windmill at bull. Blue berries pigeons buzz and bean prairie dogs nails at est. Shovels
      at rakes plows. Baa potato donkey mouse, at gate grain bins woof. Lamb in eggplant baler rain
      barrels manure hay rake. Goat goose hen horse. Grapes at yams mushrooms organic berries
      gobble.
    </p>
    <p>
      Goat goose hen horse. Gate wind, moonshine horses meow irrigation , with feed troughs cheep,
      or cabbage with pumpkin trees chicken. Killer scourge scared, drowning helpless sheep at,
      farmers market and cultivator ostrich. Apples ducks straw, quail a ostriches donkey, hay hook
      cucumbers. Lettus gobblers pens, radish o.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage
