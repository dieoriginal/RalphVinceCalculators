"use client"

import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Image as ImageIcon, Paintbrush, Plus, X } from "lucide-react"

import {
  FloatingPanelBody,
  FloatingPanelButton,
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelForm,
  FloatingPanelHeader,
  FloatingPanelLabel,
  FloatingPanelRoot,
  FloatingPanelSubmitButton,
  OptimalPositionSizeCalculator,
  FloatingPanelTrigger,
} from "@/components/ui/floating-panel"

function FloatingPanelInput() {
  const handleSubmit = (note: string) => {
    console.log("Submitted note:", note)
  }

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Optimal Position Size"
        className=""
      >
        <span>Position Size</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-80">
        <FloatingPanelForm onSubmit={handleSubmit}>
          <FloatingPanelBody className="flex flex-row gap-9">
            
            <OptimalPositionSizeCalculator id="note-input" className="min-h-[100px]" />
            <div className="text-sm text-muted-foreground border border-gray-300 bg-black-151 hover:bg-black-400 transition-colors rounded-lg p-7">
              
              <h1 className="text-lg font-extrabold text-center">Definitions</h1>
                      <ul className="list-disc list-inside">
              <li>F* is the optimal fraction of capital to risk</li>
              <li>W is the winning percentage</li>
              <li>L is the losing percentage</li>
            </ul>
            </div>
          </FloatingPanelBody>
          <FloatingPanelFooter>
        
        
          </FloatingPanelFooter>
        </FloatingPanelForm>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const ColorPickerFloatingPanel = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F1",
    "#33FFF1",
    "#F1FF33",
  ]

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Choose Color"
        className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
      >
        <span>Leverage</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-64">
        <FloatingPanelBody>
          <div className="grid grid-cols-3 gap-2">
            <AnimatePresence>
              {colors.map((color) => (
                <motion.button
                  key={color}
                  className="w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  style={{ backgroundColor: color }}
                  onClick={() => console.log(`Selected color: ${color}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </AnimatePresence>
          </div>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const ProbabilityRateCalculator = () => {
  const [winningProbability, setWinningProbability] = React.useState<number>(0);
  const [gainPositiveOutcome, setGainPositiveOutcome] = React.useState<number>(0);
  const [lossNegativeOutcome, setLossNegativeOutcome] = React.useState<number>(0);
  const [initialCapital, setInitialCapital] = React.useState<number>(0);
  const [kellyCriterion, setKellyCriterion] = React.useState<number | null>(null);

  const calculateKellyCriterion = () => {
    const winProb = winningProbability / 100;
    const gain = gainPositiveOutcome / 100;
    const loss = lossNegativeOutcome / 100;

    const kelly = (winProb * gain - (1 - winProb) * loss) / gain;
    setKellyCriterion(kelly);
  };

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Kelly Criterion Calculator"
        className="flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
      >
        <span>Kelly Criterion</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-64">
        <FloatingPanelBody>
          <input
            type="number"
            placeholder="Enter Winning Probability (%)"
            className="mb-2 p-2 rounded-md"
            value={winningProbability === 0 ? "" : winningProbability}
            onChange={(e) => setWinningProbability(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Gain of Positive Outcome (%)"
            className="mb-2 p-2 rounded-md"
            value={gainPositiveOutcome === 0 ? "" : gainPositiveOutcome}
            onChange={(e) => setGainPositiveOutcome(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Loss of Negative Outcome (%)"
            className="mb-2 p-2 rounded-md"
            value={lossNegativeOutcome === 0 ? "" : lossNegativeOutcome}
            onChange={(e) => setLossNegativeOutcome(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Initial Capital"
            className="mb-2 p-2 rounded-md"
            value={initialCapital === 0 ? "" : initialCapital}
            onChange={(e) => setInitialCapital(Number(e.target.value))}
          />
          <button
            onClick={calculateKellyCriterion}
            className="mb-2 p-2 bg-primary text-white rounded-md"
          >
            Calculate Kelly Criterion
          </button>
          {kellyCriterion !== null && (
            <div className="mt-2">
              <strong>Kelly Criterion: </strong>
              {kellyCriterion}
            </div>
          )}
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  );
};

const ImagePreviewFloatingPanel = () => {
  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Preview Image"
        className="flex items-center space-x-2 px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90 transition-colors"
      >
        <span>Preview</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-80">
        <FloatingPanelBody>
          <motion.img
            src="/placeholder.svg?height=200&width=300"
            alt="Preview"
            className="w-full h-auto rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Image preview description goes here.
          </motion.p>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
          <FloatingPanelButton
            onClick={() => console.log("Download clicked")}
            className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Download
          </FloatingPanelButton>
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

export function FloatingPanelComponent() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <FloatingPanelInput />
        <ColorPickerFloatingPanel />
        <ProbabilityRateCalculator />
        <ImagePreviewFloatingPanel />
      </div>
    </div>
  )
}
