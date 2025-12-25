export function Footer() {
  return (
    <footer className="bg-deep-sea-blue-900/80 backdrop-blur-md border-t border-deep-sea-blue-700/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-deep-sea-blue-200">
          <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
          <p className="mt-2 text-sm text-deep-sea-blue-300">A digital diary of life, work, and everything in between</p>
        </div>
      </div>
    </footer>
  )
}

