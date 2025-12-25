// Suppress Cursor browser tool warnings in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn
  console.warn = (...args: any[]) => {
    // Filter out Cursor-specific hydration warnings
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('data-cursor-ref') || 
       args[0].includes('Extra attributes from the server'))
    ) {
      return // Suppress this warning
    }
    originalWarn.apply(console, args)
  }
}

