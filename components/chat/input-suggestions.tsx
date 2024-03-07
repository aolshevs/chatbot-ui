import { ChatbotUIContext } from "@/context/context"
import { InputSuggestion } from "@/types/input-suggestions"
import { FC, useContext } from "react"

interface InputSuggestionProps {}

export const InputSuggestions: FC<InputSuggestionProps> = ({}) => {
  const {
    isInputSuggestionsOpen,
    setIsInputSuggestionsOpen,
    inputSuggestions,
    setUserInput
  } = useContext(ChatbotUIContext)

  console.log({ inputSuggestions })

  const onSuggestionClick = (suggestion: string) => {
    setUserInput(suggestion)
    setIsInputSuggestionsOpen(false)
  }

  const highlightMatchedWords = (suggestion: InputSuggestion) => {
    const { suggestion: suggestionText, highlights } = suggestion

    return [...suggestionText].map((char, i) => {
      // Check if the current character is part of a match
      const isMatch = highlights.some(
        highlight => i >= highlight.start && i < highlight.end
      )

      // If the current character is part of a match, apply underline style
      if (isMatch) {
        return (
          <span key={i} className="underline">
            {char}
          </span>
        )
      }

      return char
    })
  }

  return (
    <>
      {isInputSuggestionsOpen && inputSuggestions.length > 0 && (
        <div className="bg-background rounded-xl border-2 p-4 text-sm">
          {inputSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="text-md mb-4 cursor-pointer hover:opacity-50"
              onClick={() => onSuggestionClick(suggestion.suggestion)}
            >
              {highlightMatchedWords(suggestion)}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
