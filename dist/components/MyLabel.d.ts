import "./MyLabel.css";
export declare type LabelSize = "normal" | "h1" | "h2" | "h3";
export declare type labelColor = "primary" | "secondary" | "tertiary";
export interface MyLabelProps {
    /**
   * Message that's going to be shown
   */
    label: string;
    /**
   * Size of the label
   */
    size: LabelSize;
    /**
   * Basic color of the label
   */
    color?: labelColor;
    /**
   * Capitalize letters
   */
    allCaps?: boolean;
    /**
   * Custom font color
   */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
