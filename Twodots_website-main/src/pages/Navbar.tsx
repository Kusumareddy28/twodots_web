// src/components/Navbar.tsx

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">
          Two Dots
        </Link>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4 text-blue-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-blue-900 transition">Use Cases</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[400px] grid gap-3 bg-white border rounded-md shadow-md">
                  <NavigationMenuLink asChild>
                    <Link to="/use-cases" className="block p-3 hover:bg-blue-50 rounded-lg transition">
                      <div className="font-medium text-blue-900 mb-1">Property Management</div>
                      <p className="text-sm text-blue-600">Streamline tenant screening and fraud prevention</p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/use-cases" className="block p-3 hover:bg-blue-50 rounded-lg transition">
                      <div className="font-medium text-blue-900 mb-1">Lending</div>
                      <p className="text-sm text-blue-600">Automate credit assessment and verification</p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Static Links */}
            <NavigationMenuItem>
              <Link to="/about" className="px-3 py-2 hover:text-blue-900 transition">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/careers" className="px-3 py-2 hover:text-blue-900 transition">Careers</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/resources" className="px-3 py-2 hover:text-blue-900 transition">Resources</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="px-3 py-2 hover:text-blue-900 transition">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="ml-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
