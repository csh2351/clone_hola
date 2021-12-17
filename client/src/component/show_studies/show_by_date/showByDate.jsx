import React, { useCallback, useRef, useState } from 'react';
import EmptyList from '../../empty_list/emptyList';
import StudyList from '../../study_list/studyList';
// import useStudySearch from '../hooks/useStudySearch';

const ShowByDate = ({ checked }) => {
//   const SHOW_BY_DATE = '-createdAt';
  const [pageNumber, setPageNumber] = useState(0);

//   const observer = useRef();

//   const { studyList, hasMore, loading } = useStudySearch(
//     SHOW_BY_DATE,
//     pageNumber,
//     setPageNumber,
//     checked
//   );

//   const lastStudyElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPageNumber((prevPageNumber) => prevPageNumber + 20);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading, hasMore]
//   );

  return (
    <>
      {/* {!loading && studyList.length === 0 ? ( */}
        <EmptyList />
      {/* ) : ( */}
        <StudyList
        //   lastStudyElementRef={lastStudyElementRef}
        //   studyList={studyList}
        ></StudyList>
      {/* )} */}
    </>
  );
};

export default ShowByDate;