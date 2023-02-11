# Translator

It's an online translator powered by OpenAI GPT-3.

Highly recommend to use it by locally.

The online demo uses the free API key, may be slow or even broken.

## Setup

```bash
# Install dependencies
pnpm i

# Build
pnpm build

# Start server
pnpm start
```

> Notice you need provide an openai api key in your environment variables before execute `pnpm start`, and the key is `TRANSLATOR_API_KEY`.

Then access `http://localhost:3000` in your browser.
