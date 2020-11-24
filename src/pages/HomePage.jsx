import React, { useContext } from 'react'

import LinkButton from '../components/styled/LinkButton'
import Page from '../components/styled/Page'
import Subtitle from '../components/styled/Subtitle'
import Title from '../components/styled/Title'
import WrapperHor from '../components/styled/WrapperHor'

import { UserContext } from '../contexts/UserContext'

export default function HomePage() {
  const { userInfo } = useContext(UserContext)

  return (

    <Page>
      <WrapperHor>
        <Title>Forum</Title>
        <Subtitle> {`Welcome, ${userInfo.firstName} ${userInfo.lastName}`} </Subtitle>
        <p>
          BibleIpsum. May Yahweh answer you in the day of trouble. May the name of the God of Jacob set you up on high, 
          send you help from the sanctuary, grant you support from Zion, remember all your offerings, and accept your burnt sacrifice. 
          May He grant you your heart's desire, and fulfill all your counsel. We will triumph in your salvation. In the name of our God, 
          we will set up our banners. May Yahweh grant all your requests. Now I know that Yahweh saves his anointed. 
          He will answer him from his holy heaven, with the saving strength of his right hand. Some trust in chariots, and some in horses, 
          but we trust the name of Yahweh our God. They are bowed down and fallen, but we rise up, and stand upright. 
          Save, Yahweh! Let the King answer us when we call!
        </p>
        <p>
          Blessed is the man who doesn't walk in the counsel of the wicked, 
          nor stand in the way of sinners, nor sit in the seat of scoffers; 
          but his delight is in Yahweh's law. On his law he meditates day and night. 
          He will be like a tree planted by the streams of water, 
          that brings forth its fruit in its season, whose leaf also does not wither. 
          Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. 
          Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. 
          For Yahweh knows the way of the righteous, but the way of the wicked shall perish.
        </p>
        <LinkButton to='/posts'>See all posts</LinkButton>
      </WrapperHor>
    </Page>

  )
}
