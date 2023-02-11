import ISO6391 from 'iso-639-1'

export interface LanguageNameItem {
  code: string
  nativeName: string
  name: string
}

export const languagesNameList: LanguageNameItem[] = ISO6391.getAllCodes().map(code => ({
  code,
  nativeName: ISO6391.getNativeName(code),
  name: ISO6391.getName(code),
}))

export const inputLanguages = [{
  code: 'auto',
  nativeName: 'Auto Detect',
  name: 'Auto Detect',
}]
