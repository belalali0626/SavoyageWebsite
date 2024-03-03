import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background-color: #000;
`;

export const ProductTitle = styled.h1`
  color: #fff;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Change to space-between to ensure even spacing */
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

export const ProductBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  width: calc(33.33% - 26.67px); /* Adjust width to occupy one-third of the container's width */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const ProductDescription = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #000;
`;
