import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    Slide,
    SlideProps,
} from "@mui/material";

// Hooks
import useLinks from "../../../../hooks/useLinks";

// Types
import { Project } from "../../../../data/projects";

// Constants
const SLIDE_DOWN = React.forwardRef(function SlideDown(
    props: Omit<SlideProps, "direction">,
    ref
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export interface ProjectDialogProps {
    project: Project | null;
    open: boolean;
    handleClose: () => void;
}

function ProjectDialog(props: ProjectDialogProps) {
    const openLinks = useLinks();
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            TransitionComponent={SLIDE_DOWN}
        >
            <DialogTitle textAlign="center">
                {props.project?.title}'s Links
            </DialogTitle>
            <DialogActions>
                <Button color="error" onClick={props.handleClose}>
                    Close
                </Button>
                {props.project?.links?.code && (
                    <Button
                        onClick={() => {
                            props.handleClose();
                            openLinks(props.project?.links!.code!);
                        }}
                    >
                        Code
                    </Button>
                )}
                {props.project?.links?.website && (
                    <Button
                        onClick={() => {
                            props.handleClose();
                            openLinks(props.project?.links!.website!);
                        }}
                    >
                        Live Website
                    </Button>
                )}
                {props.project?.links?.misc && (
                    <Button
                        onClick={() => {
                            props.handleClose();
                            openLinks(props.project?.links!.misc!);
                        }}
                    >
                        Other
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}

export default ProjectDialog;
