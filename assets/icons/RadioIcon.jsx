import React from 'react'

const RadioIcon = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M12 12l0 .01">
            </path>
            <path d="M14.828 9.172a4 4 0 0 1 0 5.656">
            </path>
            <path d="M17.657 6.343a8 8 0 0 1 0 11.314"></path><path d="M9.168 14.828a4 4 0 0 1 0 -5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0 -11.314"></path></svg>
    )
}

export default RadioIcon