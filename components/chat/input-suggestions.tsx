import { ChatbotUIContext } from "@/context/context"
import { FC, useContext } from "react"

interface InputSuggestionProps {}

export const InputSuggestions: FC<InputSuggestionProps> = ({}) => {
  const {
    isInputSuggestionsOpen,
    setIsInputSuggestionsOpen,
    inputSuggestions
  } = useContext(ChatbotUIContext)

  console.log({ isInputSuggestionsOpen })

  return (
    <>
      {isInputSuggestionsOpen && inputSuggestions.length && (
        <div className="bg-background flex flex-col space-y-1 rounded-xl border-2 p-2 text-sm">
          {inputSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="text-md flex h-14 cursor-pointer items-center italic hover:opacity-50"
            >
              {suggestion.suggestion}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
