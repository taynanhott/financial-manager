'use client'

import generateRandomDate from '@/components/functions';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
    date: Date | undefined;
    value: string | undefined;
    type: string;
    subtype: string;
}

interface EntriesContextType {
    entries: Entry[];
    addEntry: (entry: Entry) => void;
    editDescription: (index: number, newEntries: string) => void;
    editType: (index: number, newEntries: string) => void;
    editSubType: (index: number, newEntries: string) => void;
    editDate: (index: number, newEntries: Date) => void;
    editValue: (index: number, newEntries: string) => void;
    removeEntries: (index: number) => void;
}

const EntriesContext = createContext<EntriesContextType | undefined>(undefined);

export const EntriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [entries, setEntries] = useState<Entry[]>([
        {
            description: "Fatura Cartão",
            date: generateRandomDate(),
            value: "650.17",
            type: "1",
            subtype: "4"
        },
        {
            description: "Gasolina",
            date: generateRandomDate(),
            value: "90",
            type: "0",
            subtype: "6"
        },
        {
            description: "Supermercado",
            date: generateRandomDate(),
            value: "270",
            type: "0",
            subtype: "2"
        },
        {
            description: "Pizza",
            date: generateRandomDate(),
            value: "70",
            type: "1",
            subtype: "0"
        },
        {
            description: "Luisa",
            date: generateRandomDate(),
            value: '550.50',
            type: "0",
            subtype: "3"
        },
        {
            description: "Parcela Empréstimo",
            date: generateRandomDate(),
            value: '576.35',
            type: "2",
            subtype: "4"
        },
        {
            description: "Mecânico",
            date: generateRandomDate(),
            value: '130.85',
            type: "0",
            subtype: "6"
        },
        {
            description: "Curso JavaScript",
            date: generateRandomDate(),
            value: '300.12',
            type: "2",
            subtype: "1"
        },
        {
            description: "Caio",
            date: generateRandomDate(),
            value: '100',
            type: "1",
            subtype: "3"
        },
        {
            description: 'Laura',
            date: generateRandomDate(),
            value: '200',
            type: "0",
            subtype: "3"
        },
        {
            description: 'Sofá',
            date: generateRandomDate(),
            value: '750',
            type: "0",
            subtype: "5"
        },
        {
            description: 'Cinema',
            date: generateRandomDate(),
            value: '50',
            type: "1",
            subtype: "6"
        },
        {
            description: 'João Victor',
            date: generateRandomDate(),
            value: '50',
            type: "0",
            subtype: "3"
        },
    ]);

    const addEntry = (entry: Entry) => {
        setEntries(prevEntries => [...prevEntries, entry]);
    };

    const editDescription = (index: number, newDescription: string) => {
        setEntries(prevEntries => prevEntries.map((entry, i) =>
            i === index ? { ...entry, description: newDescription } : entry
        ));
    };

    const editType = (index: number, newType: string) => {
        setEntries(prevEntries => prevEntries.map((entry, i) =>
            i === index ? { ...entry, type: newType } : entry
        ));
    };

    const editSubType = (index: number, newType: string) => {
        setEntries(prevEntries => prevEntries.map((entry, i) =>
            i === index ? { ...entry, subtype: newType } : entry
        ));
    };

    const editDate = (index: number, newDate: Date | undefined) => {
        setEntries(prevEntries => prevEntries.map((entry, i) =>
            i === index ? { ...entry, date: newDate } : entry
        ));
    };

    const editValue = (index: number, newValue: string) => {
        setEntries(prevEntries => prevEntries.map((entry, i) =>
            i === index ? { ...entry, value: newValue } : entry
        ));
    };

    const removeEntries = (index: number) => {
        setEntries(prevEntries => prevEntries.filter((_, i) => i !== index));
    };

    return (
        <EntriesContext.Provider value={{ entries, addEntry, editDescription, editType, editSubType, editDate, editValue, removeEntries }}>
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
