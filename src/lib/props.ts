interface CustomButtonProps {
    label: string
    className?: string
    id?: string
    action?: any
    style?: React.CSSProperties
    buttonType?: "button" | "reset" | "submit"
}