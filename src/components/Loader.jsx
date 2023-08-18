import styled, { keyframes } from "styled-components";

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const CircularProgress = styled.div`border: 4px solid rgba(0, 0, 0, 0.1);
border-top: 4px solid #3498db;
border-radius: 50%;
width: 30px;
height: 30px;
animation: ${spin} 1s linear infinite;`;

const Loader = () => {

  return (
    <Container>
      <CircularProgress/>
    </Container>
  );
};

export default Loader;
