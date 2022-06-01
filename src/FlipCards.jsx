import {useState} from 'react';

export function CardContainer (props){
    return(
        <div style={{
            width: props.width ? props.width : "20vw",
            height: props.height ? props.height : "20vh",
            borderRadius: props.borderRadius ? props.borderRadius : 10,
            margin: props.margin ? props.margin : "inherit",
            padding: props.padding ? props.padding : "inherit",
        }}>
            {props.children}
        </div>
    )
}

export function Card(props){
    return props.hover ? <HoverFlip {...props}>{props.children}</HoverFlip>
        : <ClickFlip {...props}>{props.children}</ClickFlip>
}

function HoverFlip (props) {
    const {
        transition = 'all .3s ease-in-out',
        transformSytle = 'preserve-3d',
        vertical = false
    } = props;

    const [hover, setHover] = useState(false);

    const style = {
        width: '100%', height: '100%',
        borderRadius: 'inherit',
        transition: transition,
        transformStyle: transformSytle,
        transform: (hover && !vertical) ? 'rotateY(180deg)' 
            : (hover && vertical) ? 'rotateX(180deg)' : null
    }

    return (
        <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={style}
        >
            {props.children}
        </div>
    )
}

function ClickFlip (props) {
    const {
        transition = 'all .3s ease-in-out',
        transformStyle = 'preserve-3d',
        vertical = false
    } = props;

    const [flipped, setFlipped] = useState(false);

    const style = {
        width: '100%', height: '100%',
        borderRadius: 'inherit',
        transition: transition,
        transformStyle: transformStyle,
        transform: (flipped && !vertical) ? 'rotateY(180deg)' 
            : (flipped && vertical) ? 'rotateX(180deg)' : null
    }

    return (
        <div 
            onClick={() => setFlipped(!flipped)}
            style={style}
        >
            {props.children}
        </div>
    )
}

export function Front (props) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                transformStyle:'preserve-3d',
                backfaceVisibility: props.backfaceVisibility ? props.backfaceVisibility : 'hidden',
                display: props.display ? props.display : 'flex',
                justifyContent: props.justifyContent ? props.justifyContent : 'center',
                alignItems: props.alignItems ? props.alignItems : 'center',
                background: props.background ? props.background : 'silver',
            }}
        >
            {props.children ? props.children : <p>Front</p>}
        </div>
    )
}

export function Back (props) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                backfaceVisibility: props.backfaceVisibility ? props.backfaceVisibility : 'hidden',
                transform: props.transform ? props.transform : 'rotateY(180deg)',
                display: props.display ? props.display : 'flex',
                justifyContent: props.justifyContent ? props.justifyContent : 'center',
                alignItems: props.alignItems ? props.alignItems : 'center',
                background: props.background ? props.background : 'gray',
            }}
        >
            {props.children ? props.children : <p>Back</p>}
        </div>
    )
}

export function VerticalBack (props) {
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%', height: '100%',
                borderRadius: 'inherit',
                backfaceVisibility: props.backfaceVisibility ? props.backfaceVisibility : 'hidden',
                transform: props.transform ? props.transform : 'rotateX(180deg)',
                display: props.display ? props.display : 'flex',
                justifyContent: props.justifyContent ? props.justifyContent : 'center',
                alignItems: props.alignItems ? props.alignItems : 'center',
                background: props.background ? props.background : 'silver',
            }}
        >
            {props.children}
        </div>
    )
}
