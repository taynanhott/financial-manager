'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    descricao: string;
    categoria: string;
    date: Date | undefined;
    valor: string;
}

interface EntriesContextType {
    entries: Entry[];
    addEntry: (entry: Entry) => void;
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined);

export const EntriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [entries, setEntries] = useState<Entry[]>([]);

    const addEntry = (entry: Entry) => {
        setEntries(prevEntries => [...prevEntries, entry]);
    };

    return (
        <EntriesContext.Provider value={{ entries, addEntry }}>
            {children}
        </EntriesContext.Provider>
    );
};

export const useEntries = () => {
    const context = useContext(EntriesContext);
    if (!context) {
        throw new Error('useEntries must be used within an EntriesProvider');
    }
    return context;
};
