'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
    date: Date | undefined;
    value: string | undefined;
    type: string;
}

interface EntriesContextType {
    entries: Entry[];
    addEntry: (entry: Entry) => void;
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined);

export const EntriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [entries, setEntries] = useState<Entry[]>([
        {
            description: "Fatura Cartão",
            date: undefined,
            value: "650.17",
            type: "1"
        },
        {
            description: "Gasolina",
            date: undefined,
            value: "90",
            type: "0"
        },
        {
            description: "Mercado",
            date: undefined,
            value: "270",
            type: "0"
        },
        {
            description: "Delivery",
            date: undefined,
            value: "70",
            type: "1"
        },
        {
            description: "Luisa",
            date: undefined,
            value: '550.50',
            type: "3"
        },
        {
            description: "Parcela Empréstimo",
            date: undefined,
            value: '576.35',
            type: "2"
        },
        {
            description: "Mecânico",
            date: undefined,
            value: '130.85',
            type: "0"
        },
        {
            description: "Formatura",
            date: undefined,
            value: '400.12',
            type: "2"
        },
        {
            description: "Caio",
            date: undefined,
            value: '100',
            type: "3"
        },
        {
            description: 'Laura',
            date: undefined,
            value: '200',
            type: "3"
        },
        {
            description: 'Sofá',
            date: undefined,
            value: '750',
            type: "0"
        },
        {
            description: 'João Victor',
            date: undefined,
            value: '50',
            type: "3"
        },
    ]);

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
