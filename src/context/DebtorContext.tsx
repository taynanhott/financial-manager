'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
    date: Date | undefined;
    value: string | undefined;
}

interface DeptorContextType {
    deptor: Entry[];
    addDeptor: (deptor: Entry) => void;
}

const DeptorContext = createContext<DeptorContextType | undefined>(undefined);

export const DeptorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [deptor, setDeptor] = useState<Entry[]>([
        {
            description: 'Salário Maio',
            date: undefined,
            value: '2650',
        },
        {
            description: 'Projeto Freelancer - Amazon',
            date: undefined,
            value: '1200',
        },
        {
            description: 'Luisa',
            date: undefined,
            value: '550.50',
        },
        {
            description: 'Caio',
            date: undefined,
            value: '100',
        },
        {
            description: 'Empréstimo',
            date: undefined,
            value: '5000.70',
        },
        {
            description: 'Laura',
            date: undefined,
            value: '200',
        },
        {
            description: 'Projeto Freelancer - AOC',
            date: undefined,
            value: '1900',
        },
        {
            description: 'Venda Televisão',
            date: undefined,
            value: '700',
        },
        {
            description: 'Henrique',
            date: undefined,
            value: '450',
        },
        {
            description: 'João Victor',
            date: undefined,
            value: '50',
        },
    ]);

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