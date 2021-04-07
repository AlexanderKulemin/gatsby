import React from 'react'
import SbEditable from 'storyblok-react'
 
const Teaser = ({blok}) => {
  return (
    <SbEditable content={blok}>
      
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-serif font-bold" style={{color: blok.color}}>{blok.headline}</h1>
        {console.log('XXXX', blok.bgc)}
        {blok.bgc.map(item => <div>{item._uid}</div>)}
      </div>
    </SbEditable>
  )
}
 
export default Teaser