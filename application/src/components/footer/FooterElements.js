import styled from "styled-components";

export const FooterContainer = styled.div`
    padding-top: 60px; // Increased padding for a bigger gap
    padding-bottom: 30px; // Also increased for more space at the bottom
    background: #000; // Solid black background
`

export const FooterWrapper = styled.div`
    max-width: 900px;
    margin: auto; // Center the wrapper within the FooterContainer
    padding: 0 20px; // Add some padding on the sides for smaller screens
`

export const FooterH2 = styled.h2`
    font-size: 1.5rem; // Adjusted font size
    color: white;
    font-weight: 500;
    margin-bottom: 50px; // Increased margin-bottom for a bigger gap between sections
    overflow: visible; // Allow the text to overflow if necessary
    text-overflow: clip; // Default behavior, allows text to be clipped
    white-space: normal; // Allow wrapping
    line-height: 1.2; // Adjust line height to manage the appearance of wrapped text
    max-width: 100%; // Ensure the title can expand to the full width of its container
`



export const FooterLink = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center; // Center link items vertically
    transition: all 0.3s;
    margin-bottom: 10px; // Add some space between links

    &:hover {
        color: #B05FFD;
    }
`
