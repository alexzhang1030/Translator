import { ChatGPTAPI } from 'chatgpt'
import type { TranslateRequest } from '~/composables/useTranslate'

const api = new ChatGPTAPI({
  apiKey: process.env.TRANSLATOR_API_KEY!,
})

const getRequest = (m: string, target: string) => `Please translate "${m}" to ${target}.`

export default defineEventHandler(async (event) => {
  const { word, target } = await readBody<TranslateRequest>(event)
  const message = await api.sendMessage(getRequest(word, target))
  return message
})
