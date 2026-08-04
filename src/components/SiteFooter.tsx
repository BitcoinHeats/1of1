import { LogoMark } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <LogoMark className="h-7 w-7" />
            <span className="font-bold">
              1of1<span className="text-muted-foreground">.Digital</span>
            </span>
          </div>

          <p className="max-w-2xl text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Not financial advice.</span>{" "}
            This is an educational resource. Bank policies and availability change
            often and vary by country. Always do your own research before opening
            an account or buying Bitcoin.
          </p>

          <p className="text-xs text-muted-foreground">
            Vibed with{" "}
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Shakespeare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
