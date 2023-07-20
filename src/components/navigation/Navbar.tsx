import { Navbar as NextNavbar, Button, Link, Text, Card, Radio } from "@nextui-org/react"
import Logo from '@images/icon.svg';
import { useState } from 'react'


export function Navbar() {
  const [variant, setVariant] = useState<"static" | "floating" | "sticky">("static");

  const variants = ["static", "floating", "sticky"];
  const collapseItems = [
    "About",
    "Contact"
  ];

  return (
    <NextNavbar isBordered variant={variant}>
      <NextNavbar.Brand>
        <Link href="/" color="text">
          <img src={Logo.src} alt='logo' height="64px" width="64px"/>
          <Text b color="inherit" className="font-serif text-2xl" hideIn="xs">
            Lavender Health
          </Text>
        </Link>
      </NextNavbar.Brand>
      <NextNavbar.Content hideIn="sm" activeColor="secondary">
        {collapseItems.map((item) => {
          return <NextNavbar.Link isActive={window.location.pathname.substring(1) === item.toLowerCase()} className="font-sans" href={`/${item.toLowerCase()}`}>{item}</NextNavbar.Link>
        })}
      </NextNavbar.Content>
      <NextNavbar.Toggle showIn="sm" />
      <NextNavbar.Collapse showIn="sm" disableAnimation>
        <div className="flex flex-col items-end">
          {collapseItems.map((item, index) => (
            <NextNavbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  textAlign: 'right'
                }}
                href={`/${item.toLowerCase()}`}
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
