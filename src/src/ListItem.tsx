import { memo } from "react";

interface ListItemProps {
    title: string;
}

const ListItem = memo(({ title }: ListItemProps) => {
    return <li>{title}</li>
})

export { ListItem };