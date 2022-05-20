import styled from "@emotion/styled";

export default styled.div`
  /* padding: 1rem; */
  display: block;
  max-width: 100%;

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      th {
        font-weight: normal;
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
      text-align: left;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
