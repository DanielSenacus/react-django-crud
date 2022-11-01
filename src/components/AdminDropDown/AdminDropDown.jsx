import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as server from "../../server";

const AdminDropDown = ({ setBody, body }) => {
  const [adminList, setAdminList] = React.useState([]);
  const [select, setSelect] = React.useState("Asignar Admin");
  const [adminId, setAdminId] = React.useState();

  const getAdminList = async () => {
    try {
      const res = await server.AdminList();
      const data = await res.json();
      console.log(data);
      const adminArray = data.filter((value) => value.roles == "admin");
      console.log(adminArray);
      setAdminList(adminArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name, id) => {
    setSelect(name);
    console.log(id);
    const adminUser = body.adminUser;
    setBody({ ...body, adminUser: id });
  };

  React.useEffect(() => {
    getAdminList();
  }, []);
  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        {select}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {adminList.map((admin) => (
          <Dropdown.Item
            key={admin.id}
            onClick={() => handleChange(admin.name, admin.id)}
          >
            {admin.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AdminDropDown;
