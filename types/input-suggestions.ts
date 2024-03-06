export interface InputSuggestions {
  suggestion: string
  relevance: number
  highlights: Highlight[]
}

interface Highlight {
  start: number
  end: number
}
