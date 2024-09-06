import toast from "react-hot-toast";

// Session Storage
export const newSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const deleteSessionStorage = (key: string) => {
    sessionStorage.removeItem(key);
};

export const useSessionStorage = (key: string) => {
    const items = sessionStorage.getItem(key);
    return items ? JSON.parse(items) : null;
};

// Local Storage
export const newLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const useLocalStorage = (key: string) => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
};

export const useToast = (
    name: string,
    type: "success" | "error",
    duration?: number
) => {
    toast[type](name, {
        duration: duration ? duration : 3000,
    });
};