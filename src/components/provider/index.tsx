'use client';



interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => (
 <>
      {children}
    </>

);
