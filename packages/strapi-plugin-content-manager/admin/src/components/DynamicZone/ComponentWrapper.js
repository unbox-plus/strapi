import styled from 'styled-components';

const ComponentWrapper = styled.div`
  position: relative;
  > div {
    position: relative;
    box-shadow: 0 2px 4px #e3e9f3;
    .arrow-icons {
      position: absolute;
      top: -12px;
      right: 49px;
      z-index: 9;
      .arrow-btn {
        display: inline-flex;
        svg {
          margin-left: 6px;
        }
      }
    }
    &:not(:first-of-type) {
      margin-top: 32px;
      &:before {
        content: '&';
        position: absolute;
        top: -30px;
        left: 22px;
        height: 100%;
        width: 2px;
        background-color: #e6f0fb;
        color: transparent;
      }
    }
    > div:last-of-type {
      padding-top: 6px;
      padding-bottom: 5px;
      margin-bottom: 22px;
    }
  }
`;

export default ComponentWrapper;