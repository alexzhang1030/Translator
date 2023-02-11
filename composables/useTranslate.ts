import { languagesNameList } from './language'

export const useContent = () => useState('content', () => '')
export const useTranslated = () => useState('translate', () => ({
  message: '',
  loading: false,
}))
export const useTargetLang = () => useState('targetLang', () => languagesNameList[0])

export interface TranslateRequest {
  word: string
  target: string
}
