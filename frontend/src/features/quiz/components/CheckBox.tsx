import styled from "styled-components";

const StyledCheckBox = styled.span`
  height: 2.4rem;
  width: 2.4rem;
  position: relative;

  & svg {
    position: absolute;
    left: 0;
  }

  & svg:nth-child(2) {
    opacity: 0;
    transition: transform 0.5s;
  }

  & svg:nth-child(3) {
    transform: none;
    transition: scale 1s;
    z-index: -1;
    scale: 0.1;
  }

  /*####### CHECKED STATES #######*/

  &.checked svg {
    transform: rotate(360deg);
    z-index: 6;
    scale: 1;
  }

  &.checked svg:nth-child(1) {
    opacity: 0;
  }

  &.checked svg:nth-child(2) {
    opacity: 1;
  }
`;

interface CheckBoxProps {
  isChecked: boolean;
}

function CheckBox({ isChecked }: CheckBoxProps) {
  return (
    <StyledCheckBox className={isChecked ? "checked" : ""}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#c8e3f3"
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
          stroke="var(--color-primary)"
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.9996"
          cy="12"
          r="10"
          fill="var(--color-primary)"
          stroke="var(--color-primary)"
          strokeWidth="2.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z"
          fill="white"
        ></path>
      </svg>
    </StyledCheckBox>
  );
}

export default CheckBox;
