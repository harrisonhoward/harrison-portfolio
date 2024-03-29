import React, { useRef } from "react";
import PageComponent from "../../components/PageComponent";
import ProjectCard from "../../components/ProjectCard";
import { Box, Grid, useMediaQuery } from "@mui/material";

function HomePage() {
    const isMobile = useMediaQuery("(max-width:552px)");

    const gridRef = useRef(null);
    return (
        <PageComponent
            name="Projects"
            colour="#f2e2d7"
            textColour="black"
            background="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            previous="/about"
            next="/skills"
            contentExtraProps={{ width: "100%", height: "98%" }}
            bgHeight={() =>
                gridRef.current
                    ? gridRef.current.offsetHeight + 107 > 930
                        ? gridRef.current.offsetHeight + 107
                        : "100%"
                    : "100%"
            }
        >
            <Box
                sx={{
                    width: isMobile ? "100%" : "90%",
                }}
            >
                <Grid
                    container
                    ref={gridRef}
                    rowSpacing={2}
                    columnSpacing={3}
                    justifyContent="center"
                    marginTop="2rem"
                    height="100%"
                >
                    <Grid item>
                        <ProjectCard
                            banner="/images/ForbiddenBanner.gif"
                            name="Forbidden Statistics"
                            date="2017 - 2020"
                            description="Forbidden was a General Statistics Discord bot. 
                            It gathered statistics from video games and other media and 
                            provided the user an analysis of the data."
                            linkCode="https://github.com/Forbidden-Duck/forbidden-bot"
                            active="inactive"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="/images/FitbitBanner.jpg"
                            name="Fitbit"
                            date="2020"
                            description="A collection of clockfaces and apps that I have created.
                            They work on a variety of clockfaces and I continue to apply bug fixes as users continue 
                            to report them."
                            link="https://gallery.fitbit.com/developer/9dc2e29f-47c0-4dfd-90dd-d9a838ebfb15"
                            active="active"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="/images/EcommerceBanner.jpg"
                            name="Ecommerce Website"
                            date="2021 - 2021"
                            description="In a test environment create fake successful and unsuccessful payments on
                            a catalogue of products. Manage your card, orders and the receipt for your order. As an 
                            administrator manage the users, products and orders present on the website."
                            linkCode={[
                                "https://github.com/Forbidden-Duck/ecommerce-frontend",
                                "https://github.com/Forbidden-Duck/ecommerce-backend",
                            ]}
                            active="inactive"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="/images/MongoDBBanner.png"
                            name="Mongo Web App"
                            date="2021 - 2021"
                            description="Create a new database connection entry and view all of the databases, 
                            collections and documents for that particular connection. Create an account to be able to
                            save and favourite your database connections."
                            linkCode="https://github.com/Forbidden-Duck/mongo-web-app"
                            active="inactive"
                            cardGrowth={50}
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="https://i.imgur.com/f7KdaFb.jpeg"
                            name="Thryve"
                            date="2022 - 2022"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam interdum dui at nulla egestas dapibus. Donec tempor, orci a 
                            sit amet congue mauris lorem ac nibh. Nam ultrices eu neque a condimentum."
                            active="inactive"
                            cardGrowth={45}
                        />
                    </Grid>
                </Grid>
            </Box>
        </PageComponent>
    );
}

export default HomePage;
