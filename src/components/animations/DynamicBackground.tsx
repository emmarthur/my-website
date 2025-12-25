'use client'

import { useState, useEffect } from 'react'
import { AnimatedBackground } from './AnimatedBackground'
import { GradientOrbs } from './GradientOrbs'

export function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <AnimatedBackground />
      <GradientOrbs />
    </div>
  )
}

