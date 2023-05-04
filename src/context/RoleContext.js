import { createContext } from "react";

const RoleContext = createContext({
    isAdmin: false,
    toggleAdmin: () => { },
});

export default RoleContext;