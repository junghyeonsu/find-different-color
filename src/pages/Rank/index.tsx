import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';

import useFirestore, { UsersRecordProps } from '../../hooks/useFirestore';
import JSUtility from '../../utils/JSUtility';
import * as Styled from './styled';

function Rank(): JSX.Element {
  const { getRecordsInStore } = useFirestore();

  const [userList, setUserList] = useState<UsersRecordProps[] | DocumentData[]>([]);

  useEffect(() => {
    (async () => {
      setUserList(await getRecordsInStore());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Link to="/">
          <Styled.HomeButton src="/leftArrow.png" alt="go home button" />
        </Link>
        <Styled.TitleContaienr>
          <Styled.Title>랭킹</Styled.Title>
          <Styled.SubTitle>랭킹은 1위부터 100위까지만 표시됩니다.</Styled.SubTitle>
        </Styled.TitleContaienr>
      </Styled.Header>
      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Rank>랭킹</Styled.Rank>
            <Styled.UserName>이름</Styled.UserName>
            <Styled.Stage>단계</Styled.Stage>
            <Styled.Point>점수</Styled.Point>
          </Styled.THeadRow>
        </Styled.THead>
        <Styled.TBody>
          {userList.map((data, index) => {
            if (index + 1 === 1) {
              return (
                <Styled.TBodyRow key={data.time}>
                  <Styled.Rank>🥇 {index + 1}등</Styled.Rank>
                  <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                  <Styled.Stage>{data.stage}</Styled.Stage>
                  <Styled.RankerPoint>
                    {JSUtility.includeCommaInNumber(data.point)}
                  </Styled.RankerPoint>
                </Styled.TBodyRow>
              );
            }
            if (index + 1 === 2) {
              return (
                <Styled.TBodyRow key={data.time}>
                  <Styled.Rank>🥈 {index + 1}등</Styled.Rank>
                  <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                  <Styled.Stage>{data.stage}</Styled.Stage>
                  <Styled.RankerPoint>
                    {JSUtility.includeCommaInNumber(data.point)}
                  </Styled.RankerPoint>
                </Styled.TBodyRow>
              );
            }
            if (index + 1 === 3) {
              return (
                <Styled.TBodyRow key={data.time}>
                  <Styled.Rank>🥉 {index + 1}등</Styled.Rank>
                  <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                  <Styled.Stage>{data.stage}</Styled.Stage>
                  <Styled.RankerPoint>
                    {JSUtility.includeCommaInNumber(data.point)}
                  </Styled.RankerPoint>
                </Styled.TBodyRow>
              );
            }
            return (
              <Styled.TBodyRow key={data.time}>
                <Styled.Rank>{index + 1}등</Styled.Rank>
                <Styled.UserName>{data.userName}</Styled.UserName>
                <Styled.Stage>{data.stage}</Styled.Stage>
                <Styled.Point>{JSUtility.includeCommaInNumber(data.point)}</Styled.Point>
              </Styled.TBodyRow>
            );
          })}
        </Styled.TBody>
      </Styled.Table>
    </Styled.Container>
  );
}

export default Rank;
