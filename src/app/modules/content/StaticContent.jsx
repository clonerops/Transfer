import { useState } from "react";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import { useFetchNews, useFetchStaticContent } from "./core/_hooks";
import Button from "../../../_cloner/helpers/components/Modules/Button";
import { StaticContentGrid } from "../../../_cloner/helpers/grid-value/static-content";
import CreateStaticContent from "./components/CreateStaticContent";
import EditStaticContent from "./components/EditStaticContent";

const StaticContent = () => {
    const [items, setItems] = useState({
        id: 0,
        title: "",
        content: "",
        file: "",
        userId: 0,
        uniqueName: "",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCreate, setIsOpenCreate] = useState(false);

    const openCreateModal = () => setIsOpenCreate(true);

    const openModal = (items) => {
        setItems({
            id: items.id,
            Title: items.title,
            Content: items.content,
            File: items.fileData,
            UniqueName: items.uniqueName,
            UserId: items.userId,
        });
        setIsOpen(true);
    };

    const { data: staticContent } = useFetchStaticContent();
    console.log(staticContent)
    return (
        <>
            <Card5 title="محتوا ثابت" image="/media/svg/brand-logos/aven.svg">
                <Button onClick={openCreateModal} title="ایجاد محتوا ثابت" />
                <MainGrid
                    data={staticContent}
                    columnDefs={StaticContentGrid(openModal)}
                />
            </Card5>
            <CreateStaticContent
                isOpen={isOpenCreate}
                setIsOpen={setIsOpenCreate}
            />
            <EditStaticContent
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                items={items}
            />
        </>
    );
};

export default StaticContent;
