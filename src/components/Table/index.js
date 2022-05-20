import Table from "./Table";
import Styles from "./Table.style";

export default function ({ columns, data }) {
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
