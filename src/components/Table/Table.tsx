import React from "react";
import styled from "styled-components";

interface TableProps {
  headers?: string[];
  rows?: string[][];
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? "#eee" : props.backgroundColor || "#fff")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const StyledTh = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #f5f5f5;
  text-align: left;
`;

const StyledTd = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const StyledTfoot = styled.tfoot`
  background-color: #f5f5f5;
  font-weight: bold;
`;

const Table = ({
  headers = ["Header 1", "Header 2"],
  rows = [["Cell 1", "Cell 2"]],
  disabled = false,
  backgroundColor,
}: TableProps) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <StyledTh key={i}>{h}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <StyledTd key={j}>{cell}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
      <StyledTfoot>
        <tr>
          <td colSpan={headers.length}>Table Footer</td>
        </tr>
      </StyledTfoot>
    </StyledTable>
  );
};

export default Table;
