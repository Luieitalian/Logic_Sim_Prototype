import { MenuElement, MenuElementFunctions } from "@/src/components/Window";

export const WindowContextMenuElements: MenuElement[] = [
    {
        id: 1,
        func: MenuElementFunctions.ADD_ORGATE,
        title: "Add OR Gate"
    },
    {
        id: 2,
        func: MenuElementFunctions.ADD_SWITCHGATE,
        title: "Add SWITCH Gate"
    }
];

export default WindowContextMenuElements;