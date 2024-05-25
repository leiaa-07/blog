import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      <div>
       welcome <span className="font-bold">to leia's blog! :)</span>
      </div>
      <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
        current life update:
      </p>
    </div>
  );
};

export default Greeting;
