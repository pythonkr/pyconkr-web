import React, { useEffect } from "react";
import Page from "components/common/Page";

const SponsorPage = () => {
    useEffect(() => {
        window.location.href = "https://info.pycon.kr/sponsor-2024"
    }, [])
    return <Page title="후원하기"></Page>;
}

export default SponsorPage;