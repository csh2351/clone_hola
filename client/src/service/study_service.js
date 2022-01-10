import httpClient from './http_client';
import { getFormatedToday } from '../common/utils';

/*
글 등록, 삭제, 수정, 조회 등 study 글 관련 api를 모아놓은 class입니다.
to-do
*/
class Study {
  constructor() {
    this.study = httpClient;
  }

  getList = async (query, selectedLanguages, pageNumber, checked) => {
    try {
      const params = {
        sort: query,
        offset: pageNumber,
        limit: 20,
        isClosed: checked,
      };

      if (selectedLanguages.length !== 0) {
        // 선택된 language가 있으면 language 속성 추가
        const qs = selectedLanguages.map((language) => language).join(',');
        params.language = qs;
      }

      const studyList = await this.study.get('studies', {
        params,
      });

      return studyList;
    } catch (error) {
      console.error(error);
    }
  };

  getDetail = async (id) => {
    try {
      const response = await this.study.get(`studies/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getRecommendedPost = async (id) => {
    try {
      const response = await this.study.get(`studies/${id}/recommend`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
  register = async ({ title, content, language }) => {
    try {
      const response = await this.study.post('studies', {
        title,
        content,
        language,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  modify = async (id, title, content, language) => {
    try {
      const response = await this.study.patch(`studies/${id}`, {
        title,
        content,
        language,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  editClose = async (id, isClosed) => {
    try {
      const response = await this.study.patch(`studies/${id}`, {
        isClosed,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  deleteStudy = async (id) => {
    try {
      await this.study.delete(`studies/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  // 스터디의 댓글 리스트 조회
  getComments = async (id) => {
    try {
      // const response = await this.study.get(`studies/comments/${id}`);
      let response = {
        data: {
          comments: [{
            content: "TEST Comment",
            _id: "TESTID",
            author : {
              image: 'test imag',
              nickName: "test Nick",
              createdAt: Date.now()
            },
            createdAt: Date.now()
          }]
        }
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  // 신규 댓글 등록
  registerComment = async ({ id, content }) => {
    try {
      const response = await this.study.post('studies/comments', {
        studyId: id,
        content,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 수정
  modifyComment = async ({ id, content }) => {
    try {
      const response = await this.study.patch(`studies/comments/${id}`, {
        content,
      });
      return response;
    } catch (error) {
      //console.log(error.response.status);
      return error.response.status;
      //console.log("error from console.log", error);
      //return
    }
  };

  // 댓글 삭제
  deleteComment = async ({ id }) => {
    try {
      await this.study.delete(`studies/comments/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  addLikes = async (studyId) => {
    try {
      // const response = await this.study.post('studies/likes', {
      //   studyId,
      // });
      const response = {
        data : {
          likeUsers: ['test1', 'test2', 'teste3']
        }
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  deleteLikes = async (studyId) => {
    try {
      // const response = await this.study.delete(`studies/likes/${studyId}`);
      const response = {
        data : {
          likeUsers: ['test1', 'test2']
        }
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  getLikesUser = async (studyId) => {
    try {
      let response = {
        data: {
          likeUsers: ["test1", "test2"]
        }
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getPresignedUrl = async (userName) => {
    try {
      const fileName = `${userName}_${getFormatedToday()}.png`;
      const response = await this.study.post('users/sign', {
        fileName,
      });
      return { preSignedUrl: response.data.preSignUrl, fileName };
    } catch (error) {
      console.error(error);
    }
  };
}

const studyService = new Study(httpClient);
export default studyService;
