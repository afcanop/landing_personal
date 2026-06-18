"use client"

import { useState, useEffect } from "react"

const PREFIX = "afcanop@dev:~$ "

interface Step {
  command: string
  output: string
}

const steps: Step[] = [
  { command: "identidad", output: "Andrés Felipe Cano Piedrahita" },
  { command: "rol", output: "Full Stack Developer & Engineer" },
  { command: "stack --tecno", output: "Angular \u00b7 React \u00b7 Python \u00b7 Django \u00b7 PHP \u00b7 Laravel \u00b7 Symfony \u00b7 TypeScript \u00b7 JavaScript \u00b7 HTML \u00b7 CSS \u00b7 SQL" },
  { command: "experiencia", output: "8+ a\u00f1os \u00b7 Medell\u00edn, Colombia" },
]

export default function Terminal() {
  const [stepIndex, setStepIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [showingOutput, setShowingOutput] = useState(false)
  const [cursor, setCursor] = useState(true)

  const done = stepIndex >= steps.length

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (stepIndex >= steps.length) {
      return
    }
    const step = steps[stepIndex]
    if (!showingOutput) {
      if (charCount < step.command.length) {
        const t = setTimeout(() => setCharCount((c) => c + 1), 40)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setShowingOutput(true), 500)
        return () => clearTimeout(t)
      }
    } else {
      const t = setTimeout(() => {
        setStepIndex((i) => i + 1)
        setCharCount(0)
        setShowingOutput(false)
      }, 800)
      return () => clearTimeout(t)
    }
  }, [stepIndex, charCount, showingOutput])

  return (
    <div className="bg-bg-darker border border-accent/20 rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/10 bg-bg-darker">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-text-tertiary text-xs ml-2">terminal</span>
      </div>
      <div className="p-5 space-y-2 min-h-[260px]">
        {steps.slice(0, stepIndex).map((step, i) => (
          <div key={i}>
            <div>
              <span className="text-accent">{PREFIX}</span>
              <span>{step.command}</span>
            </div>
            <div className="text-accent-secondary pl-4">{step.output}</div>
          </div>
        ))}
        {stepIndex < steps.length && (
          <div>
            <div>
              <span className="text-accent">{PREFIX}</span>
              <span>{steps[stepIndex].command.slice(0, charCount)}</span>
              {!showingOutput && (
                <span className={`inline-block w-2 h-4 bg-text-primary ml-0.5 ${cursor ? "opacity-100" : "opacity-0"}`} />
              )}
            </div>
            {showingOutput && (
              <div className="text-accent-secondary pl-4">{steps[stepIndex].output}</div>
            )}
          </div>
        )}
        {done && (
          <div>
            <span className="text-accent">{PREFIX}</span>
            <span className="inline-block w-2 h-4 bg-text-primary ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
