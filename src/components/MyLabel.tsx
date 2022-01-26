import "./MyLabel.css";

type LabelSize = "normal" | "h1" | "h2" | "h3";

type labelColor = "primary" | "secondary" | "tertiary";

interface MyLabelProps {
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

export const MyLabel = ({
    label = "No Label",
    size = "normal",
    color = "primary",
    allCaps,
    fontColor
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
