export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a
              href="https://mikkouson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline"
            >
              Mikko Uson
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by{" "}
            <a
              href="https://joshlei.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              JoshLei
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
