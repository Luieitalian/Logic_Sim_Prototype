import { MenuElementFunctions } from "@/src/components/Window";
import { MenuElement } from '@/src/components/Window';

export const GateContextMenuElements: MenuElement[] = [
    {
        id: 1,
        func: MenuElementFunctions.DOUBLE_SIZE,
        title: "Double Size"
    },
    {
        id: 2,
        func: MenuElementFunctions.SHRINK_SIZE,
        title: "Shrink Size"
    },
    {
        id: 3,
        func: MenuElementFunctions.ADD_INPUTNODE,
        title: "Add Input Node"
    }
];

export default GateContextMenuElements;