///<reference types="react" />

declare module 'navigation/NavigationApp' {
    type Options = {
        className: string;
        iconClassName: string;
        labelClassName: string;
    };

    type Item = {
        label: string;
        icon: string;
        template?: (item: Item, options: Options) => void;
        items?: object[];
    };

    const NavigationLazy: React.ComponentType<{ items: Item[] }>;

    export default NavigationLazy;
}

declare module 'list/ListApp' {
    const ListLazy: React.ComponentType;

    export default ListLazy;
}

declare module 'cookbook/CookbookApp' {
    const CookbookLazy: React.ComponentType;

    export default CookbookLazy;
}

declare module 'cart/CartApp' {
    const CartLazy: React.ComponentType;

    export default CartLazy;
}

declare module 'footer/FooterApp' {
    const FooterLazy: React.ComponentType;

    export default FooterLazy;
}
