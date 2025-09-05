import singletonGlobal from './singletonGlobal'
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonTeam from './singletonTeam'
import singletonProjects from './singletonProjects'
import singletonContact from './singletonContact'
import project from './project'
import testimonial from './testimonial'
import imageBlock from './common/ImageBlock'
import contentBlocks from './objects/ContentBlocks'
import textWithImage from './objects/ContentBlocks/TextWithImage/TextWithImage'

import seo from './common/seo'
import link from './objects/Link'
import blockContent from './common/blockContent'
import teamMember from './teamMember'
import Page from './documents/Page'

import NavigationSection from './objects/Navigation/Section'
import NavigationLink from './objects/Navigation/Link'
import Navigation from './documents/Navigation'

export const schemaTypes = [
  singletonGlobal,
  singletonHome,
  singletonProjects,
  project,
  singletonAbout,
  singletonTeam,
  singletonContact,
  blockContent,
  teamMember,
  seo,
  link,
  testimonial,
  textWithImage,
  imageBlock,
  contentBlocks,
  Page,
  Navigation,
  NavigationLink,
  NavigationSection,
]
