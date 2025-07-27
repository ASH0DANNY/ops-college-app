'use client';

import { createContext, useContext, useState } from 'react';

interface MobileMenuContextType {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
            {children}
        </MobileMenuContext.Provider>
    );
}

export function useMobileMenu() {
    const context = useContext(MobileMenuContext);
    if (context === undefined) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }
    return context;
}
