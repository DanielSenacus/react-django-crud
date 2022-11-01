import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as server from "../../server";

const CompanyDropDown = ({ setBody, body }) => {
  const [companyList, setCompanyList] = React.useState([]);
  const [select, setSelect] = React.useState("Asignar Empresa");

  const getCompanyList = async () => {
    try {
      const res = await server.getCompany();
      const data = await res.json();
      console.log(data);
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelect(e);
    console.log(e);
    const company = body.company;
    setBody({ ...body, company: e });
  };

  React.useEffect(() => {
    getCompanyList();
  }, []);
  return (
    <Dropdown onSelect={handleChange}>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        {select}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {companyList.map((company) => (
          <Dropdown.Item key={company.id} eventKey={company.companysName}>
            {company.companysName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CompanyDropDown;
