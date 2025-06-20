import { useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '@common/LoadingSpinner';
import useGemini from '@/hooks/useGemini';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ResultHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const ResultImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const ResultContent = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #333;
  white-space: pre-wrap;
`;

const AITitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const AIDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default function AIResultPage() {
  const { result, loading, error, imageURL } = useGemini();
  let { title, course, tips } = result;

  course = JSON.stringify(course);
  tips = JSON.stringify(tips);

  useEffect(() => {
    if (result) {
      console.log('Gemini 응답:', result);
    }
    if (error) {
      console.error('Gemini 에러:', error);
    }
  }, [result, error, imageURL]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <ResultContainer>
      <ResultHeader>
        <Title>{'AI 응답 결과'}</Title>
        <Description>{'Gemini AI가 제공한 응답 결과입니다.'}</Description>
      </ResultHeader>

      {imageURL && <ResultImage src={imageURL} alt="관련 이미지" />}

      {loading ? (
        <ResultContent>데이터를 불러오는 중입니다...</ResultContent>
      ) : (
        <ResultContent>
          {result ? (
            <>
              <AITitle>{title}</AITitle>
              <br></br>

              <h3>여행 일정</h3>
              <AIDescription>{course}</AIDescription>
              <br></br>
              <h3>팁</h3>
              <AIDescription>{tips}</AIDescription>
              {error && (
                <>
                  <br></br>
                  <AIDescription>
                    - Google API 서버단에서 에러가 발생하여 mockData로 대신하여 보여드리는 결과입니다.
                  </AIDescription>
                </>
              )}
            </>
          ) : (
            '아직 결과가 없습니다.'
          )}
        </ResultContent>
      )}
    </ResultContainer>
  );
}
