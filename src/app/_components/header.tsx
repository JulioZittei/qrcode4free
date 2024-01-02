import Link from "next/link";

function Header() {
  return (
    <header className="relative flex space-y-6">
      <nav className="container flex items-center justify-center p-6">
        <Link href="/" className="flex flex-col items-center justify-center">
          <span className="font-heading text-3xl font-semibold leading-7">
            QRCode<span className="text-primary">4Free</span>
          </span>
          <h1 className="font-sans">Crie QrCodes grátis!</h1>
        </Link>
      </nav>
    </header>
  );
}

export { Header };
