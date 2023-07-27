import React, {ReactNode} from 'react';
export default function Container<ReactNode>({children}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white">
      {children}
    </main>
  );
}
