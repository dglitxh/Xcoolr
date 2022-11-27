import React, { useState } from "react";
import {
  Navbar,
  Link,
  Text,
  Switch,
  useTheme,
  Dropdown,
} from "@nextui-org/react";
import { SunIcon } from "./icons";
import { MoonIcon } from "./icons";

function NavBar() {
  const [active, setActive] = useState(0);
  const setTheme = {};
  const [user, setUser] = useState("");
  const { isDark, type } = useTheme();

  const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <Navbar maxWidth={"fluid"} isBordered={isDark} variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link color="inherit">
          <Text b>Xscoolr.</Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content activeColor="primary" hideIn="xs" variant={"underline"}>
        {navLinks.map((item, index) => {
          return (
            <Navbar.Link
              key={index}
              onClick={() => {
                setActive(index + 1);
              }}
              isActive={index + 1 == active}
              href={"/#" + item.toLowerCase()}
            >
              {item}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Content>
        {user ? (
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                //  iconRight={icons.chevron}
                ripple={false}
              >
                {user.split(" ")[0]}
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              selectionMode="single"
              onAction={(key) => {
                console.log(key);
                // dropdownActions[key]();
              }}
              aria-label="user_menu"
              css={{
                $$dropdownMenuWidth: "240px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="subscriptions"
                showFullDescription
                //  icon={icons.scale}
              >
                subscriptions
              </Dropdown.Item>
              <Dropdown.Item key="logout">logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Navbar.Link color="inherit">Get started</Navbar.Link>
        )}
        <Navbar.Item>
          <Switch
            shadow
            size="xs"
            iconOn={
              <SunIcon
                fill="currentColor"
                filled={true}
                size={24}
                height={24}
                width={24}
                label="slime"
              />
            }
            iconOff={
              <MoonIcon
                fill="currentColor"
                filled={true}
                size={24}
                height={24}
                width={24}
                label="slime"
              />
            }
            checked={isDark}
            // onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>

      <Navbar.Collapse>
        {Object.keys(navLinks).map((item, index) => {
          return (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              isActive={active == index + 1}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={"/#" + item.toLowerCase()}
                onClick={() => {
                  setActive(index + 1);
                }}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
