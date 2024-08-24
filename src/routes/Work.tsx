import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Container from "../styles/Container";
import NavButton from "../components/layout/NavButton/NavButton";
import { RouteName } from "../data/routes";
import work, { type Role, type Work } from "../data/work";
import {
    getAllAvailableWork,
    getAllRolesForWork,
    getRoleByWorkAndRoleIndex,
    getWorkByIndex,
} from "../utils/WorkUtil";
import { useAnimatedSelected } from "../hooks/useAnimatedSelection";
import GlassCard from "../components/ui/GlassCard";
import WorkSlider from "../features/Work/WorkSlider";
import WorkRolesSlider from "../features/Work/WorkRolesSlider";
import WorkCard from "../features/Work/WorkCard";

const allAvailableWork = getAllAvailableWork();
const initialActiveWorkIndex = allAvailableWork.length - 1;
const initialActiveWork = allAvailableWork[initialActiveWorkIndex];
const rolesByWork = getAllRolesForWork(initialActiveWork.id);
const initialActiveRoleIndex = rolesByWork.length - 1;

const Work: React.FC = () => {
    const [activeWorkIndex, setActiveWorkIndex] = useState(
        initialActiveWorkIndex
    );
    const [activeRoleIndex, setActiveRoleIndex] = useState(
        initialActiveRoleIndex
    );

    // FIXME: Result of framer motion bug.
    const {
        selected: selectedWork,
        refSelected: refWorkSelected,
        setSelected: setSelectedWork,
    } = useAnimatedSelected<Work | undefined>(getWorkByIndex(activeWorkIndex));
    useEffect(() => {
        const newWork = getWorkByIndex(activeWorkIndex);
        if (selectedWork?.id !== newWork?.id) {
            setSelectedWork(newWork);
        }
    }, [activeWorkIndex]);
    const {
        selected: selectedRole,
        refSelected: refRoleSelected,
        setSelected: setSelectedRole,
    } = useAnimatedSelected<Role | undefined>(
        getRoleByWorkAndRoleIndex(activeWorkIndex, activeRoleIndex)
    );
    useEffect(() => {
        const newRole = getRoleByWorkAndRoleIndex(
            activeWorkIndex,
            activeRoleIndex
        );
        if (selectedRole?.title !== newRole?.title) {
            setSelectedRole(newRole);
        }
    }, [activeRoleIndex]);

    const handleWorkChange = useCallback(
        (newIndex: number) => {
            setActiveWorkIndex(newIndex);
            const newRoles = getAllRolesForWork(allAvailableWork[newIndex].id);
            setActiveRoleIndex(newRoles.length - 1);
        },
        [setActiveWorkIndex, setActiveRoleIndex]
    );

    return (
        <Container
            sx={{
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: 700,
            }}
        >
            <NavButton toName={RouteName.Projects} direction="left" />
            <GlassCard
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: "1rem 3rem",
                    marginBottom: "1rem",
                }}
            >
                <WorkSlider
                    activeWorkIndex={activeWorkIndex}
                    onChange={handleWorkChange}
                />
                <WorkRolesSlider
                    activeWorkIndex={activeWorkIndex}
                    activeRoleIndex={activeRoleIndex}
                    onChange={setActiveRoleIndex}
                />
            </GlassCard>
            <AnimatePresence mode="wait">
                {/* This setup allows us to animate in and out of projects */}
                {work.map((work) => {
                    if (work.id !== selectedWork?.id) {
                        return null;
                    }

                    return (
                        <WorkCard
                            key={work.id}
                            work={work}
                            role={selectedRole!}
                            refWork={refWorkSelected}
                            refRole={refRoleSelected}
                        />
                    );
                })}
            </AnimatePresence>
        </Container>
    );
};

export default Work;
