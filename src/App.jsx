import "./App.css";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeeList } from "./components/employees/EmployeesList.jsx";

export const App = () => {
 return <>
 {/* <TicketList /> */}
 <EmployeeList />
 </>
};
