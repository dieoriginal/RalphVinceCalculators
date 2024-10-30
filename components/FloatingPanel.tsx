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
           
          </FloatingPanelBody>
          <FloatingPanelFooter>
        
        
          </FloatingPanelFooter>
        </FloatingPanelForm>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const OptimalLeverageCalculator = () => {
  const [averageReturn, setAverageReturn] = React.useState<number>(0);
  const [riskFreeRate, setRiskFreeRate] = React.useState<number>(0);
  const [variance, setVariance] = React.useState<number>(0);
  const [optimalLeverage, setOptimalLeverage] = React.useState<number | null>(null);

  const calculateOptimalLeverage = () => {
    const fStar = (averageReturn - riskFreeRate) / variance;
    setOptimalLeverage(fStar / 2); // Using half-Kelly betting
  };

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Optimal Leverage"
        className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
      >
        <span>Optimal Leverage</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-64">
        <FloatingPanelBody>
          <input
            type="number"
            placeholder="Enter Average Return (μ)"
            className="mb-2 p-2 rounded-md"
            value={averageReturn === 0 ? "" : averageReturn}
            onChange={(e) => setAverageReturn(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Risk-Free Rate (r)"
            className="mb-2 p-2 rounded-md"
            value={riskFreeRate === 0 ? "" : riskFreeRate}
            onChange={(e) => setRiskFreeRate(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Enter Variance (σ^2)"
            className="mb-2 p-2 rounded-md"
            value={variance === 0 ? "" : variance}
            onChange={(e) => setVariance(Number(e.target.value))}
          />
          <button
            onClick={calculateOptimalLeverage}
            className="mb-2 p-2 bg-primary text-white rounded-md"
          >
            Calculate Optimal Leverage
          </button>
          {optimalLeverage !== null && (
            <div className="mt-2">
              <strong>Optimal Leverage: </strong>
              {optimalLeverage}
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
        title="Stop Loss"
        className="flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
      >
        <span>Stop Loss</span>
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
        <OptimalLeverageCalculator />
        <ProbabilityRateCalculator />
        <ImagePreviewFloatingPanel />
      </div>
    </div>
  )
}
