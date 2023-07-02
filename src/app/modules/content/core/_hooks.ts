import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "./_requests";
import {
    Faq,
    FaqWithoutId,
    News,
    NewsWithoutId,
    StaticLink,
    StaticLinkWithoutId,
    Ticket,
    TicketAnswer,
    TicketSendData,
} from "./_models";

// Static Links
const useFetchStaticLinks = () => {
    return useQuery(["staticlinks"], api.getStaticLinks);
};

const useCreateStaticLinks = () => {
    return useMutation((formData: StaticLinkWithoutId) => {
        return api.createStaticLink(formData);
    });
};

const useEditStaticLinks = () => {
    return useMutation(
        (formData: StaticLink) => {
            return api.editStaticLicks(formData.id, formData);
        },
        {
            onSuccess: () => {
                // queryClinet.refetchQueries('staticLinks')
            },
        }
    );
};

const useDeleteStaticLinks = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteStaticLinks, {
        onSuccess: (_, id) => {
            const staticLinks: any = queryClient.getQueryData(["staticlinks"]);
            const data = staticLinks?.filter(
                (item: StaticLink) => item.id !== id
            );
            queryClient.setQueriesData(["staticlinks"], data);
        },
    });
};

// Faq

const useFetchFaq = () => {
    return useQuery(["faq"], api.getFaq);
};

const useCreateFaq = () => {
    return useMutation((formData: FaqWithoutId) => {
        return api.createFaq(formData);
    });
};

const useEditFaq = () => {
    return useMutation((formData: Faq) => {
        return api.editFaq(formData.id, formData);
    });
};

const useDeleteFaq = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteFaq, {
        onSuccess: (_, id) => {
            const faq: any = queryClient.getQueryData(["faq"]);
            const data = faq?.filter((item: any) => item.id !== id);
            queryClient.setQueryData(["faq"], data);
        },
    });
};
// News
const useFetchNews = () => {
    return useQuery(["news"], api.getNews);
};

const useCreateNews = () => {
    return useMutation((formData: any) => {
        return api.createNews(formData);
    });
};

const useEditNews = () => {
    return useMutation((formData: any) => {
        return api.editNews(formData);
    });
};

const useDeleteNews = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteNews, {
        onSuccess: (_, id) => {
            const news: any = queryClient.getQueryData(["news"]);
            const data = news?.filter((item: any) => item.id !== id);
            queryClient.setQueryData(["news"], data);
        },
    });
};

// StaticContent

const useFetchStaticContent = () => {
    return useQuery(["staticcontent"], api.getStaticContent);
};

const useCreateStaticContent = () => {
    return useMutation((formData: any) => {
        return api.createStaticContent(formData);
    });
};

const useEditStaticContent = () => {
    return useMutation((formData: any) => {
        return api.editStaticContent(formData);
    });
};

const useDeleteStaticContent = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteStaticContent, {
        onSuccess: (_, id) => {
            const staticcontent: any = queryClient.getQueryData([
                "staticcontent",
            ]);
            const data = staticcontent?.filter((item: any) => item.id !== id);
            queryClient.setQueryData(["staticcontent"], data);
        },
    });
};

// Ticket
const useFetchCustomTicket = () => {
    return useQuery(["ticket"], api.getCustomTicket);
};

const useFetchTicket = () => {
    // return useQuery(["ticket"], api.getTicket);
    return useMutation((formData: TicketSendData) => {
        return api.getTicket(formData);
    });
};

const useAnswerTicket = () => {
    return useMutation((formData: TicketAnswer) => {
        return api.answerTicket(formData);
    });
};

const useDeleteTicket = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteTicket, {
        onSuccess: (_, id) => {
            const ticket: any = queryClient.getQueryData(["ticket"]);
            const data = ticket?.filter((item: any) => item.id !== id);
            queryClient.setQueryData(["ticket"], data);
        },
    });
};

export {
    useFetchStaticLinks,
    useCreateStaticLinks,
    useEditStaticLinks,
    useDeleteStaticLinks,
    useFetchFaq,
    useCreateFaq,
    useEditFaq,
    useDeleteFaq,
    useFetchNews,
    useCreateNews,
    useEditNews,
    useDeleteNews,
    useFetchStaticContent,
    useCreateStaticContent,
    useEditStaticContent,
    useDeleteStaticContent,
    useFetchCustomTicket,
    useFetchTicket,
    useAnswerTicket,
    useDeleteTicket,
};
