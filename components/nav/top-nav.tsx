import { cn } from '@/lib/utils';

export const TopNav = () => {
  return (
    <div className={cn('sticky z-50 top-0 bg-audeas', 'border-b', 'fade-in')}>
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-2 px-6 sm:px-8 flex justify-end items-center"
      >
        <div className="py-2 text-white font-semibold">
          <a href="mailto:secaudeas@gmail.com">secaudeas@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
