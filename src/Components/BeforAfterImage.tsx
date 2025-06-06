import React, { useReducer } from "react";

type State = {
    rangeValue: number;
};

type Action =
    | { type: "change"; payload: number }
    | { type: "move"; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "change":
            return {
                rangeValue: action.payload
            };
        case "move":
            return {
                rangeValue: Math.round(action.payload)
            };
        default:
            return state;
    }
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type PointerEvent = React.PointerEvent<HTMLDivElement>;
type InlineStyle = React.CSSProperties;

interface IBeforAfterImage {
    beforeImage: string;
    afterImage: string;
    onChange?: (event: ChangeEvent) => void;
    onPointerMove?: (event: PointerEvent) => void;
    onPointerEnter?: (event: PointerEvent) => void;
    onPointerLeave?: (event: PointerEvent) => void;
    pointerMove?: boolean;
    className?: string;
    beforeClassName?: string;
    afterClassName?: string;
    buttonClassName?: string;
    style?: InlineStyle;
    beforeStyle?: InlineStyle;
    afterStyle?: InlineStyle;
    buttonStyle?: InlineStyle;
}

const BeforeAfterImage: React.FC<IBeforAfterImage> = (props: IBeforAfterImage) => {

    const {
        beforeImage,
        afterImage,
        onChange,
        onPointerMove,
        onPointerEnter,
        onPointerLeave,
        pointerMove = false,
        className = "before-after-slider",
        beforeClassName = "before",
        afterClassName = "after",
        buttonClassName = "resize-button",
        style,
        beforeStyle,
        afterStyle,
        buttonStyle
    } = props;

    const [{ rangeValue }, dispatch] = useReducer(reducer, {
        rangeValue: 50
    });

    const handleChange = (event: ChangeEvent) => {
        dispatch({ type: "change", payload: Number(event.target.value) });

        if (onChange) onChange(event);
    };

    const handlePointerMove = (event: PointerEvent) => {
        const { clientX, currentTarget } = event;
        const { left, width } = currentTarget.getBoundingClientRect();
        const positionX = clientX - left;

        if (positionX >= 0)
            dispatch({ type: "move", payload: (positionX / width) * 100 });

        if (onPointerMove) onPointerMove(event);
    };

    const handlePointerEnter = (event: PointerEvent) => {
        if (!onPointerEnter) return;

        onPointerEnter(event);
    };

    const handlePointerLeave = (event: PointerEvent) => {
        if (!onPointerLeave) return;

        onPointerLeave(event);
    };

    return (
        <div
            className={className}
            style={{
                position: `relative`,
                overflow: `hidden`,
                width: "fit-content",
                cursor: "e-resize",
                userSelect: "none",
                ...style
            }}
            onPointerMove={pointerMove ? handlePointerMove : undefined}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <div
                className={beforeClassName}
                style={{
                    position: "absolute",
                    overflow: "hidden",
                    width: `${rangeValue}%`,
                    height: "100%",
                    top: 0,
                    left: 0,
                    borderRight: "2px solid #eee",
                    ...beforeStyle
                }}
            >
                <img src={beforeImage} alt="before" style={{ height: "100%" }} />
            </div>

            <div className={afterClassName} style={afterStyle}>
                <img
                    src={afterImage}
                    alt="after"
                    style={{ maxWidth: "100%", display: "block" }}
                />
            </div>

            {!pointerMove && (
                <>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={rangeValue}
                        name="slider"
                        onChange={handleChange}
                        style={{
                            appearance: "none",
                            backgroundColor: "transparent",
                            width: "100%",
                            height: " 100%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            cursor: "inherit"
                        }}
                    />
                    <div
                        className={buttonClassName}
                        style={{
                            backgroundColor: "#fff",
                            fontWeight:"bold",
                            pointerEvents: "none",
                            position: "absolute",
                            top: "50%",
                            left: `${rangeValue}%`,
                            transform: `translate(-50%,-50%)`,
                            borderRadius: "50%",
                            width: 50,
                            height: 50,
                            color: "gray",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            ...buttonStyle
                        }}
                    >
                        DRAG
                    </div>
                </>
            )}
        </div>
    )
}

export default BeforeAfterImage;
