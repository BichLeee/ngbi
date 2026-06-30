import React, { createContext, useState } from "react";

export const AppContext = createContext<{
    introHasPlayed: boolean;
    setIntroHasPlayed: (introHasPlayed: boolean) => void;
}>({} as any);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [introHasPlayed, setIntroHasPlayed] = useState(false);

    return (
        <AppContext.Provider value={{ introHasPlayed, setIntroHasPlayed }}>
            {children}
        </AppContext.Provider>
    );
};
