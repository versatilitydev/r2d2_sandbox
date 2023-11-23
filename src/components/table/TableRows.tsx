/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { HashFile } from "../../settings/constants";
import Tag from "../Tag";

const StyledTd = styled.td`
  padding: 2rem;
  text-align: center;
  font-family: sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 600px;
  color: ${(props) => (props.color ? "blue" : "none")};
`;
type FileRowProps = {
  file: HashFile;
};

const TableRow: React.FC<FileRowProps> = ({ file }) => {
  return (
    <tr className="shadow-lg text-center w-screen">
      <StyledTd>{file.file_name}</StyledTd>
      <StyledTd>
        <Tag type="green">{file.file_hash}</Tag>
      </StyledTd>
    </tr>
  );
};

export default TableRow;
