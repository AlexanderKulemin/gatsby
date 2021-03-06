import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import Placeholder from './Placeholder'
 
const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'grid': Grid
}
 
const Component = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return blok.component ? <Placeholder componentName={blok.component}/> : null
}
 
export default Component