import {
  GlobeAltIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 flex justify-between items-center text-xs text-gray-500">
      <div>©{currentYear} Choiyoungdok. All rights reserved.</div>
      <div className="flex space-x-4">
        <a
          href="https://rhisma-syahrul-putra.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio Website"
          className="hover:text-gray-700"
        >
          <GlobeAltIcon className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/rhisma-syahrul-putra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <LinkIcon className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/RhismaSyahrulPutra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900"
        >
          <CodeBracketIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
