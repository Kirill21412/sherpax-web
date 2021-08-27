import styled from "styled-components";

export const ContentWrap = styled.div`
  position: relative;
  .container {
    padding: 17vw 10vw 0vw;
    transform: skew(0deg, 10deg);
    .title {
      padding: 0 0 8.533vw;
      font-size: 7.2vw;
      font-weight: bold;
      line-height: 8.667vw;
      max-width: 80vw;
    }
    .content {
      font-size: 3.733vw;
      line-height: 5.6vw;
      font-weight: 300;
    }
    img.world {
      width: 76.533vw;
      height: calc(76.667vw + 3.667vw * 2);
      padding: 3.667vw 0;
    }
    img.triangle {
      width: 56.8vw;
      height: calc(55.067vw + 5.333vw + 10vw) ;
      padding: 5.333vw 0 10vw;
    }
    img.share {
      width: 56vw;
      height: calc(56.133vw + 8.533vw * 2);
      padding: 8.533vw 0;
    }
    img.nft {
      width: 80vw;
      height: calc(56.133vw + 5.2vw * 2);
      padding: 5.2vw 0;
      margin-bottom: 9vw;
    }
  }
`;

