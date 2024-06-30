import React, { useEffect } from "react";
import Page from "components/common/Page";

const CocPage = () => {
    useEffect(() => {
        window.location.href = "https://2023.pycon.kr/coc/purpose"
    }, [])
    return <Page title="Code Of Conduct"></Page>;
}

export default CocPage;