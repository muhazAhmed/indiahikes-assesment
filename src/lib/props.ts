interface CustomButtonProps {
    label: string
    className?: string
    id?: string
    action?: any
    style?: React.CSSProperties
    buttonType?: "button" | "reset" | "submit"
}

interface LoginProps {
    toggleState: any;
    setLoading: (value: boolean) => void
}

interface RegisterProps {
    toggleState: any;
    setLoading: (value: boolean) => void
}

export type {
    CustomButtonProps, LoginProps, RegisterProps
}