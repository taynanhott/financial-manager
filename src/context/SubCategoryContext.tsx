'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Entry {
    description: string;
}

interface SubCategoryContextType {
    subcategory: Entry[];
    addSubCategory: (subcategory: Entry) => void;
    editDescription: (index: number, newDescription: string) => void;
    removeSubCategory: (index: number) => void;
}

const SubCategoryContext = createContext<SubCategoryContextType | undefined>(undefined);

export const SubCategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [subcategory, setSubCategory] = useState<Entry[]>([
        { description: 'Delivery' },
        { description: 'Estudo' },
        { description: 'Mercado' },
        { description: 'Emprestado' },
        { description: 'Conta' },
        { description: 'Lazer' },
        { description: 'Cotidiano' },
        { description: 'Compra' }
    ]);

    const addSubCategory = (subcategory: Entry) => {
        setSubCategory(prevSubCategory => [...prevSubCategory, subcategory]);
    };

    const editDescription = (index: number, newDescription: string) => {
        setSubCategory(prevSubCategory => prevSubCategory.map((sub, i) =>
            i === index ? { ...sub, description: newDescription } : sub
        ));
    };

    const removeSubCategory = (index: number) => {
        setSubCategory(prevSubCategory => prevSubCategory.filter((_, i) => i !== index));
    };

    return (
        <SubCategoryContext.Provider value={{ subcategory, addSubCategory, editDescription, removeSubCategory }}>
            {children}
        </SubCategoryContext.Provider>
    );
};

export const useSubCategory = () => {
    const context = useContext(SubCategoryContext);
    if (!context) {
        throw new Error('useDeptor must be used within an SubCategoryProvider');
    }
    return context;
};
