import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// These schema are for singletons
const singletons = ["tutorial"]
// These schemas are not meant to be listed in the sidebar
const exclude = ["contentEditor"]

const makeItems = (S) => {
  return Object.values(schemaTypes)
    .filter(type => !exclude.includes(type.name))
    .map(type => {
    
    // Singletons
    if (singletons.includes(type.name)) {
      return S.listItem()
        .title(type.title)
        .id(type.name)
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType(type.name)
            .documentId(type.name)
        )
    }

    // Other
    return S.documentTypeListItem(type.name).title(type.title)
  })
}


/** THIS CURSED MACHINE */
export default defineConfig({
  name: 'default',
  title: 'tcm-admin',

  projectId: '70kzkeor',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => 
        S.list()
          .title("Content")
          .items(makeItems(S))
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
