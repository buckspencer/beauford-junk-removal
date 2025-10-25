export function Footer() {
  return (
    <footer className="border-t bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold text-secondary-foreground">Beauford Junk Removal</h3>
          <p className="mb-4 text-secondary-foreground/80">Fast. Reliable. Local.</p>
          <div className="mb-6 flex flex-col items-center gap-2 text-sm text-secondary-foreground/70 sm:flex-row sm:justify-center sm:gap-4">
            <a href="tel:5204510767" className="hover:text-accent">
              520-451-0767
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:5207295116" className="hover:text-accent">
              520-729-5116
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Beauford Junk Removal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
