import { ReactNode, useEffect, useState } from 'react';
import { IAMContext, IAMContextType } from './iam-context';
import { User } from '../model/user';
import { ProfileApi } from '../services/profile-api';

const profileApi = new ProfileApi();

export function IAMContextProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token)
            profileApi.getProfileInfo().then((res) => {
                const data = res.data;
                const profile = new User("", "", data.name, data.profilePicture);
                setUser(profile);
                setLoggedIn(true);
            });
    }, []);

    const IAMContextValue: IAMContextType = {
        isLoggedIn,
        setLoggedIn,
        user,
        setUser
    }

    return (
        <IAMContext.Provider value={IAMContextValue}>
            {children}
        </IAMContext.Provider>
    );
};