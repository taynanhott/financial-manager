'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
}

interface CategoryContextType {
    category: Entry[];
    addCategory: (category: Entry) => void;
    editDescription: (index: number, newDescription: string) => void;
    removeCategory: (index: number) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [category, setCategory] = useState<Entry[]>([
        { description: 'Débito' },
        { description: 'Crédito' },
        { description: 'Parcelado' },
        { description: 'Emprestado' }
    ]);

    const addCategory = (category: Entry) => {
        setCategory(prevCategory => [...prevCategory, category]);
    };

    const editDescription = (index: number, newDescription: string) => {
        setCategory(prevCategory => prevCategory.map((cat, i) =>
            i === index ? { ...cat, description: newDescription } : cat
        ));
    };

    const removeCategory = (index: number) => {
        setCategory(prevCategory => prevCategory.filter((_, i) => i !== index));
    };

    return (
        <CategoryContext.Provider value={{ category, addCategory, editDescription, removeCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useDeptor must be used within an CategoryProvider');
    }
    return context;
};
