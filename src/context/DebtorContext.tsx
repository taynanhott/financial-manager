'use client'

import generateRandomDate from '@/components/functions';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
    date: Date | undefined;
    value: string | undefined;
    status: boolean;
}

interface DeptorContextType {
    deptor: Entry[];
    addDeptor: (deptor: Entry) => void;
    editDescription: (index: number, newDeptor: string) => void;
    editStatus: (index: number, newDeptor: boolean) => void;
    editDate: (index: number, newDeptor: Date) => void;
    editValue: (index: number, newDeptor: string) => void;
    removeDeptor: (index: number) => void;
}

const DeptorContext = createContext<DeptorContextType | undefined>(undefined);

export const DeptorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [deptor, setDeptor] = useState<Entry[]>([
        {
            description: 'Salário',
            date: generateRandomDate(),
            value: '2650',
            status: false
        },
        {
            description: 'Projeto Freelancer - Amazon',
            date: generateRandomDate(),
            value: '1200',
            status: true
        },
        {
            description: 'Luisa',
            date: generateRandomDate(),
            value: '550.50',
            status: true
        },
        {
            description: 'Caio',
            date: generateRandomDate(),
            value: '100',
            status: false
        },
        {
            description: 'Empréstimo',
            date: generateRandomDate(),
            value: '500.70',
            status: true
        },
        {
            description: 'Laura',
            date: generateRandomDate(),
            value: '200',
            status: false
        },
        {
            description: 'Projeto Freelancer - AOC',
            date: generateRandomDate(),
            value: '1900',
            status: false
        },
        {
            description: 'Venda Televisão',
            date: generateRandomDate(),
            value: '700',
            status: true
        },
        {
            description: 'Henrique',
            date: generateRandomDate(),
            value: '450',
            status: true
        },
        {
            description: 'João Victor',
            date: generateRandomDate(),
            value: '50',
            status: false
        },
    ]);

    const addDeptor = (deptor: Entry) => {
        setDeptor(prevDeptor => [...prevDeptor, deptor]);
    };

    const editDescription = (index: number, newDescription: string) => {
        setDeptor(prevDeptor => prevDeptor.map((dep, i) =>
            i === index ? { ...dep, description: newDescription } : dep
        ));
    };

    const editStatus = (index: number, newStatus: boolean) => {
        setDeptor(prevDeptor => prevDeptor.map((dep, i) =>
            i === index ? { ...dep, status: newStatus } : dep
        ));
    };

    const editDate = (index: number, newDate: Date | undefined) => {
        setDeptor(prevDeptor => prevDeptor.map((dep, i) =>
            i === index ? { ...dep, date: newDate } : dep
        ));
    };

    const editValue = (index: number, newValue: string) => {
        setDeptor(prevDeptor => prevDeptor.map((dep, i) =>
            i === index ? { ...dep, value: newValue } : dep
        ));
    };

    const removeDeptor = (index: number) => {
        setDeptor(prevDeptor => prevDeptor.filter((_, i) => i !== index));
    };

    return (
        <DeptorContext.Provider value={{ deptor, addDeptor, editDescription, editDate, editStatus, editValue, removeDeptor }}>
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