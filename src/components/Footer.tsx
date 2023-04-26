import footerStyle from "@/styles/Footer";
import { Box, Button, Textarea, Typography } from "@mui/joy";
import axios from "axios";
import React, {
    ChangeEventHandler,
    FormEventHandler,
    useCallback,
    useState,
} from "react";
import { toast } from "react-toastify";

type FooterProps = {
    authUser: string;
    authPass: string;
    apiKey: string;
};

const Footer: React.FC<FooterProps> = ({ authUser, authPass, apiKey }) => {
    const [message, setMessage] = useState("");

    const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
        (e) => setMessage(e.target.value),
        []
    );

    const submitHandler: FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            e.preventDefault();

            if (message.length < 10) return;

            const sendMail = () =>
                axios.post("/api/sendMail", {
                    authUser,
                    authPass,
                    apiKey,
                    message,
                });

            toast.promise(
                sendMail,
                {
                    pending: "Sending message...",
                    success: "Message sent",
                    error: "Internal server error",
                },
                { theme: "colored" }
            );

            setMessage("");
        },
        [authUser, authPass, apiKey, message]
    );

    return (
        <Box component="footer" sx={footerStyle}>
            <Box
                className="contact"
                id="contact"
                component="form"
                onSubmit={submitHandler}
            >
                <Typography level="h4">Contact</Typography>
                <Textarea
                    placeholder="Minimum 10 characters"
                    variant="soft"
                    size="lg"
                    minRows={10}
                    maxRows={10}
                    value={message}
                    onChange={changeHandler}
                />
                <Button
                    type="submit"
                    sx={{ marginRight: "auto", paddingInline: 8 }}
                >
                    Send message
                </Button>
            </Box>
        </Box>
    );
};

export default Footer;
