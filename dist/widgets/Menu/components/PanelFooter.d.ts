import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    togglePush: () => void;
}
declare const PanelFooter: React.FC<Props>;
export default PanelFooter;
