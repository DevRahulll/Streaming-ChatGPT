import { getConversation } from "@/features/conversation/action/conversation-action";
import { notFound } from "next/navigation";

type ConversationPageProps = {
    params: Promise<{ id: string }>;
};

const page = async ({ params }: ConversationPageProps) => {
    const { id } = await params;

    try {
        await getConversation(id);
    } catch (error) {
        notFound();
    }

    return <div>page {id}</div>;
};

export default page;
