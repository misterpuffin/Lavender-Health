import { Navbar as NextNavbar, Button, Link, Text, Card, Radio } from "@nextui-org/react"
import Logo from '@images/icon.svg';
import { useState } from 'react'


export function Navbar() {
  const [variant, setVariant] = useState<"static" | "floating" | "sticky">("static");

  const variants = ["static", "floating", "sticky"];
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextNavbar isBordered variant={variant}>
      <NextNavbar.Brand>
        <img src={Logo.src} alt='logo' height="64px" width="64px"/>
        <Text b color="inherit" className="font-serif text-2xl" hideIn="xs">
          Lavender Health
        </Text>
      </NextNavbar.Brand>
      <NextNavbar.Content hideIn="sm">
        <NextNavbar.Link className="font-sans" href="features">Features</NextNavbar.Link>
        <NextNavbar.Link className="font-sans" href="#">Customers</NextNavbar.Link>
        <NextNavbar.Link className="font-sans" href="#">Pricing</NextNavbar.Link>
        <NextNavbar.Link className="font-sans" href="#">Company</NextNavbar.Link>
      </NextNavbar.Content>
      <NextNavbar.Toggle showIn="sm" />
      <NextNavbar.Collapse disableAnimation>
        <div className="flex flex-col items-end">
          {collapseItems.map((item, index) => (
            <NextNavbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  textAlign: 'right'
                }}
                href="#"
              >
                {item}
              </Link>
            </NextNavbar.CollapseItem>
          ))}
        </div>
      </NextNavbar.Collapse>
    </NextNavbar>
  )

}
