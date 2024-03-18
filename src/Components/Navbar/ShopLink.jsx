import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function ShopLink() {
  return (
    <Link
      to="/varieties"
      className="hover:text-[#5EC49D] transition-all duration-150 ease"
    >
      VARIETIES
    </Link>
  );
}

export default ShopLink;
