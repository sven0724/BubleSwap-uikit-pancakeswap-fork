import React from "react";
import { PanelProps, PushedProps, MenuEntry } from "../types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    homeLink?: MenuEntry;
    togglePush: () => void;
}
declare const Panel: React.FC<Props>;
export default Panel;
