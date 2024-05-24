import BuildWith from './BuildWith';

export default function Footer() {
  return (
    <footer>
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>Karhdo's Blog - Karhdo's Coding Adventure</span>
        </div>
    </footer>
  );
}
