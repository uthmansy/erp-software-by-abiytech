import { Card, Statistic, Table } from "antd";
import useReceivables from "../../../hooks/useReceivables";
import { receivablesColumns } from "../../../tableColumns/receivables";
import { formatNumber } from "../../../helpers/functions";

function Receivables() {
  const {
    isLoading,
    receivables,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    salesPaymentsBalanceSum,
  } = useReceivables();

  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-6 gap-10">
      <div className="md:col-span-2">
        <Card
          title="Receivables Stats"
          bordered={true}
          style={{ width: "100%" }}
        >
          <Statistic
            title="Total Receivables from Sales"
            value={
              salesPaymentsBalanceSum
                ? formatNumber(salesPaymentsBalanceSum)
                : "NA"
            }
            prefix={"₦"}
          />
        </Card>
      </div>
      <div className="md:col-span-4">
        {/* <h2 className="text-3xl mb-5">Sales</h2> */}
        <Table
          size="small"
          loading={isLoading || isFetchingNextPage || isRefetching}
          columns={receivablesColumns}
          dataSource={receivables}
          pagination={false}
          scroll={{ y: 450, x: "max-content" }}
          bordered
          onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            if (
              target.scrollHeight - target.scrollTop ===
              target.clientHeight
            ) {
              fetchNextPage();
            }
          }}
        />
      </div>{" "}
    </div>
  );
}

export default Receivables;