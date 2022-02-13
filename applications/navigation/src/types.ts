export type Options = {
    className: string;
    iconClassName: string;
    labelClassName: string;
};

export type Item = {
    label: string;
    icon: string;
    template?: (item: Item, options: Options) => void;
    items?: object[];
};
