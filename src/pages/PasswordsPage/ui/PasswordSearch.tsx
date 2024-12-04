import { useEffect, useRef, useState } from "react";
import { Input } from "shared/ui/Input/Input";
import { usePasswordService } from "../lib/contexts/passwordContext/lib/usePasswordService";
import { findMostSimilar } from "shared/lib/findMostSimmilar/findMostSimmilar";

export const PasswordSearch = () => {
    const [search, setSearch] = useState("");
    const isMounted = useRef(false);
    const { changePasswordsList, resetPasswordsList, initialPasswords } = usePasswordService();

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        if (search.length < 1) {
            console.log("reset");
            resetPasswordsList();
            return;
        }
        const searchTimeout = setTimeout(() => {
            changePasswordsList(findMostSimilar(initialPasswords, "service", search, 6));
        }, 500);

        return () => clearTimeout(searchTimeout);
    }, [search]);

    return <Input placeholder="поиск" value={search} onChange={e => setSearch(e.target.value)} />;
};
