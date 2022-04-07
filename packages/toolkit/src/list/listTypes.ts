export interface IOnTodosToggleClick {
    (id: string): React.MouseEventHandler<HTMLElement>
}

export interface IOnTodosToggleChange {
    (id: string): (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}
