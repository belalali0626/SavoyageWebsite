import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 100%;
    min-height: 700px;    
    justify-content: center;  
    display: flex;
    background: #ADD8E6; /* Light blue background for a consistent theme */
`;

export const InfoWrapper = styled.div`
    display: flex;
    padding: 80px 0;
    width: 1200px;
    justify-content: center;
    align-items: center;
    /* Consider if you need a specific background color here or if it should inherit from InfoContainer */
`;

export const Title = styled.h1`
    font-weight: 900;
    color: #010606; /* Darker text for contrast and readability */
`;

export const Subtitle = styled.h5`
    color: #ADD8E6; /* Slightly off-white for the subtitle, ensuring it's visible against the light blue */
    font-weight: 500;
    text-transform: uppercase;
`;
