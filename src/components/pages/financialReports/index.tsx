import { Tabs, TabsProps } from "antd";
import useFinancialReports from "../../../hooks/useFinancialReports"; // Custom hook for financial reports
import Ledger from "./Ledger";
import Expenses from "../expenses";
import Transactions from "./Transactions";
import Payrolls from "../payrolls";
import FinancialReportChart from "./FinancialReportChart";
import Payables from "./Payables";
import {
  TfiMoney,
  TfiPieChart,
  TfiWallet,
  TfiWidgetized,
} from "react-icons/tfi";
import TabLabel from "../../TabLabel";
import { VscEmptyWindow, VscFileSymlinkFile, VscFiles } from "react-icons/vsc";
import Receivables from "./Receivables";

function FinancialReports() {
  const { isLoading, isRefetching, reports, csvHeaders } =
    useFinancialReports(); // Updated hook for financial reports

  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <TabLabel Icon={TfiWidgetized} label="Monthly Ledger" />,
      children: (
        <Ledger
          isLoading={isLoading}
          isRefetching={isRefetching}
          reports={reports}
          csvHeaders={csvHeaders}
        />
      ),
    },
    {
      key: "2",
      label: <TabLabel Icon={TfiPieChart} label="Analytics" />,
      children: <FinancialReportChart />,
    },
    {
      key: "3",
      label: <TabLabel Icon={TfiWallet} label="Expenses" />,
      children: <Expenses />,
    },
    {
      key: "4",
      label: <TabLabel Icon={TfiMoney} label="Transactions" />,
      children: <Transactions />,
    },
    {
      key: "5",
      label: <TabLabel Icon={VscFileSymlinkFile} label="Payables" />,
      children: <Payables />,
    },
    {
      key: "6",
      label: <TabLabel Icon={VscEmptyWindow} label="Receivables" />,
      children: <Receivables />,
    },
    {
      key: "7",
      label: <TabLabel Icon={VscFiles} label="Payrolls" />,
      children: <Payrolls />,
    },
  ];

  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default FinancialReports;