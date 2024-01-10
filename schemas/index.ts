import singletonGlobal from './singletonGlobal'
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonTeam from './singletonTeam'
import singletonProjects from './singletonProjects'
import singletonContact from './singletonContact'
import project from './project'
import testimonial from './testimonial'

import seo from './common/seo'
import blockContent from './common/blockContent'
import teamMember from './teamMember'

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
  testimonial,
]
