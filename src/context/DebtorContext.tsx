'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
    date: Date | undefined;
    value: number | undefined;
}

interface DeptorContextType {
    deptor: Entry[];
    addDeptor: (deptor: Entry) => void;
}

const DeptorContext = createContext<DeptorContextType | undefined>(undefined);

export const DeptorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [deptor, setDeptor] = useState<Entry[]>([]);

    const addDeptor = (deptor: Entry) => {
        setDeptor(prevDeptor => [...prevDeptor, deptor]);
    };

    return (
        <DeptorContext.Provider value={{ deptor, addDeptor }}>
            {children}
        </DeptorContext.Provider>
    );
};

export const useDeptor = () => {
    const context = useContext(DeptorContext);
    if (!context) {
        throw new Error('useDeptor must be used within an DeptorProvider');
    }
    return context;
};