import blockContent from './blockContent'
import singletonGlobal from './singletonGlobal'
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonProjects from './singletonProjects'
import singletonContact from './singletonContact'
import singletonLanding from './singletonLanding'
import project from './project'

import seo from './common/seo'

export const schemaTypes = [
  singletonGlobal,
  singletonLanding,
  singletonHome,
  singletonProjects,
  project,
  singletonAbout,
  singletonContact,
  blockContent,
  seo,
]
