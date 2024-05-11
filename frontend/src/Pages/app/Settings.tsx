import Menus from "../../components/Menus";

function Settings() {
  return (
    <div>
      <Menus>
        <Menus.Toggle id="me" />
        <Menus.List id="me">
          <li>master</li>
          <li>stream</li>
          <li>tamers</li>
        </Menus.List>
      </Menus>
    </div>
  );
}

export default Settings;
