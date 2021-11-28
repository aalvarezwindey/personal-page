import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  margin: 0.5em 0;
  padding: 0;
  display: flex;
  width: 100%;
  align-items: center;
`;

const Logo = styled.image`
  width: 8em;
  height: 8em;
  font-size: 0.30em;
  margin-right: 2em;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const DetailHeader = styled.header`
  font-size: 0.35em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.25em;
`;

const Title = styled.h4`
  margin: 0;
`;

const Date = styled.span`
  font-weight: bold;
`;

const JobTitle = styled.h5`
  margin: 0;
  font-size: 0.32em;
  margin-bottom: 0.15em;
  font-weight: 500;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.30em;
  text-align: justify;
`;

const RelevantExperience = ({
  title, date, logo, jobTitle, descriptions,
}) => (
  <Container>
    <Logo>
      {logo}
    </Logo>
    <DetailContainer>
      <DetailHeader>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </DetailHeader>
      {jobTitle ? <JobTitle>{jobTitle}</JobTitle> : null}
      {descriptions.map((desc) => <Description key={desc}>{desc}</Description>)}
    </DetailContainer>
  </Container>
);

export default RelevantExperience;
