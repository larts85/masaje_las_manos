import EN from './translation-en.json'
import ES from './translation-es.json'
import PT from './translation-pt.json'

export type TranslationFile = typeof import('./translation-en.json')

interface Languages {
  [keyof: string]: TranslationFile
}

const languages: Languages = {
  'en-US': EN,
  'es-AR': ES,
  'pt-BR': PT,
}

export default languages
