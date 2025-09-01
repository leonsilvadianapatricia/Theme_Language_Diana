import React from "react";
import { useI18n } from "../context/I18nRouterContext.jsx";

export default function Curriculum() {
    const { t } = useI18n();
    return (
        <section>
            <h2>{t.curriculum.title}</h2>
            <p>{t.curriculum.content}</p>
        </section>
    );
}