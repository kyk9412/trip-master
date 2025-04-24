import Button from '@common/CityPage/Button';
import usePlan from '@store/usePlan';
import ButtonWrapper, { ContainerTextbox, Title, Text, Wrapper, Image } from '@common/CityPage/ButtonWrapper';

function Domestic() {
  const { handleSingleClick, isSingleSelected } = usePlan();
  const cityList = [
    { text: "가평'양평", id: 'gapyeong', category: 'korea' },
    { text: "강릉'속초", id: 'gangneung', category: 'korea' },
    { text: '경주', id: 'gyeongju', category: 'korea' },
    { text: '부산', id: 'busan', category: 'korea' },
    { text: '여수', id: 'yeosu', category: 'korea' },
    { text: '인천', id: 'incheon', category: 'korea' },
    { text: '전주', id: 'jeonju', category: 'korea' },
    { text: '제주', id: 'jeju', category: 'korea' },
    { text: "춘천'홍천", id: 'chuncheon', category: 'korea' },
    { text: '태안', id: 'taean', category: 'korea' },
    { text: "통영'거제'남해", id: 'tongyeong', category: 'korea' },
    { text: "포항'안동", id: 'pohang', category: 'korea' },
  ];

  return (
    <>
      <ContainerTextbox>
        <Image src="/images/airplane.png" style={{ width: '50px' }} alt="Airplane" />
        <Title>국내에서 떠나고 싶은 곳은?</Title>
        <Text>1곳을 선택해주세요.</Text>
      </ContainerTextbox>

      <div className="foreign_area" style={{ marginBottom: '100px' }}>
        <ButtonWrapper titleText="대한민국" direction="row">
          {cityList
            .filter(({ category }) => category === 'korea')
            .map((city, index) => {
              return (
                <Button
                  key={city.id}
                  text={city.text}
                  id={city.id}
                  handleClick={handleSingleClick}
                  active={isSingleSelected(city.id)}
                />
              );
            })}
        </ButtonWrapper>
      </div>
    </>
  );
}

export default Domestic;
