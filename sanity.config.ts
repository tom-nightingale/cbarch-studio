import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {SanityStructure} from './sanity-structure'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'default',
  title: 'CB Architecture',
  projectId: projectId,
  dataset: dataset,
  plugins: [
    deskTool({
      structure: SanityStructure,
    }),
    visionTool(),
    vercelDeployTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
