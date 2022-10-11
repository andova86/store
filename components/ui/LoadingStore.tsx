import { Backdrop, CircularProgress } from "@mui/material";
import { FC } from "react";

interface Props {
    showLoading: boolean;
}
export const LoadingStore: FC<Props> = ({ showLoading }) => {
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
