import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    margin-bottom: 4rem;
    max-width: 90%;
  }

  form {
    display: flex;
    max-width: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 3.2rem;
      margin-bottom: 1.8rem;
    }

    button {
      margin-top: 3rem;
      padding: 16px;
      width: 100%;
      border-radius: 10px;
      background: #7000E0;
      font-size: 1.8rem;

      & :hover {
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;

    a {
      font-size: 16px;
      transition: 0.2s;

      :hover {
        color: #8917FB;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;

  p {
    font-size: 1.6rem;
    padding: 1.6rem 0;

    a {
      color: #00C2FF;
      font-size: 1.6rem;
      transition: 0.2s;
      text-decoration: underline;
      
      :hover {
        color: #0398c5;
      }
    }
  }
`;