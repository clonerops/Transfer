import { useState } from "react";
import { Card5 } from "../../../_cloner/partials/content/cards/Card5";
import MainGrid from "../../../_cloner/helpers/components/MainGrid";
import { useFetchCustomTicket, useFetchTicket } from "./core/_hooks";
import { Ticket } from "./core/_models";
import AnswerTicket from "./components/AnswerTicket";
import { TicketGrid } from "../../../_cloner/helpers/grid-value/ticket";
import { IDate } from "../../../_cloner/model/date";
import { setDate } from "../../../_cloner/helpers/set-date";
import DatepickerComponent from "../../../_cloner/helpers/components/Modules/Datepicker";
import { useFormik } from "formik";
import moment from "moment-jalaali";
import ActionButton from "../../../_cloner/helpers/components/Modules/ActionButton";

const TicketContent = () => {
    const [fromDate, setFromDate] = useState<IDate>({
        value: setDate().toString(),
    });
    const [toDate, setToDate] = useState<IDate>({
        value: new Date().toString(),
    });

    const [items, setItems] = useState<Ticket>({
        id: 0,
        ticketDesc: "",
        answerDesc: "",
        ticketStatus: 0,
        driverName: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const openModal = (items: Ticket) => {
        setItems({
            id: items.id,
            ticketDesc: items.ticketDesc,
            answerDesc: items.answerDesc,
            ticketStatus: 0,
        });
        setIsOpen(true);
    };

    const { data: tickets, refetch } = useFetchCustomTicket();
    const { mutate, isLoading } = useFetchTicket();

    const formik = useFormik({
        initialValues: {},
        onSubmit: async () => {
            try {
                mutate(
                    {
                        fromDate: moment(fromDate.value).format(
                            "jYYYY/jMM/jDD"
                        ),
                        toDate: moment(toDate.value).format("jYYYY/jMM/jDD"),
                    },
                    {
                        onSuccess: (_) => {
                          refetch()
                        },
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <>
            <Card5
                title="تیکت های پشتیبانی"
                image="/media/svg/brand-logos/aven.svg"
            >
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex">
                        <DatepickerComponent
                            getFieldProps={formik.getFieldProps}
                            date={setFromDate}
                            name={"fromDate"}
                            title="از تاریخ"
                            placeholder={moment(fromDate.value).format(
                                "jYYYY/jMM/jDD"
                            )}
                        />
                        <DatepickerComponent
                            getFieldProps={formik.getFieldProps}
                            date={setToDate}
                            name={"toDate"}
                            title="تا تاریخ"
                            placeholder={moment(toDate.value).format(
                                "jYYYY/jMM/jDD"
                            )}
                        />
                    </div>
                    <div className="flex items-end justify-end">
                        <ActionButton loading={isLoading} title="جستجو" />
                    </div>
                </form>

                <MainGrid data={tickets} columnDefs={TicketGrid(openModal)} />
            </Card5>
            <AnswerTicket isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
        </>
    );
};

export default TicketContent;
