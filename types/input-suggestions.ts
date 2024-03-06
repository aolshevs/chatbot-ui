export interface InputSuggestion {
  suggestion: string
  relevance: number
  highlights: Highlight[]
}

interface Highlight {
  start: number
  end: number
}
