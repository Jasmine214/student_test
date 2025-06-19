'use client';

export default function MobileFrame({ children }) {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div
        className="w-full sm:w-[420px] max-w-[90%] h-full sm:h-[90vh] 
        bg-white rounded-2xl p-6 shadow-lg overflow-hidden flex flex-col"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 74, 173, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 74, 173, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >

        {children}
      </div>
    </div>
  );
}
