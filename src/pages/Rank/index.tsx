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
      const records = await getRecordsInStore();
      const recordsMap = records.docs.map(doc => doc.data());
      setUserList(recordsMap);
    })();
  }, [getRecordsInStore]);

  return (
    <Styled.Container>
      <Link to="/">
        <Styled.HomeButton>홈으로</Styled.HomeButton>
      </Link>
      <Styled.Title>랭킹</Styled.Title>
      <Styled.RankContainer>
        {userList.map((data, index) => {
          return (
            <Styled.Row key={data.time}>
              <Styled.Rank>{index + 1}등</Styled.Rank>
              <Styled.UserName>{data.userName}님</Styled.UserName>
              <Styled.Stage>{data.stage}단계</Styled.Stage>
              <Styled.Point>{JSUtility.includeCommaInNumber(data.point)}점</Styled.Point>
            </Styled.Row>
          );
        })}
      </Styled.RankContainer>
    </Styled.Container>
  );
}

export default Rank;
