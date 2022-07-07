import React from "react";
import NavBar from '../../components/NavBar';
import WirelessSpeaker from "./components/WirelessSpeaker";
import AdvantagesWireless from "./components/AdvantagesWireless";
import DesignedForFuture from "./components/DesignedForFuture";
import Technology from "./components/Technology";
import Features from "./components/Features";
import Questions from "./components/Questions ";
import Layout from "../../components/Layout";

export default function MainPage() {

    return (
        <div className="wrap-page">
            <Layout>
                <WirelessSpeaker/>
                <NavBar />
                <AdvantagesWireless />
                <DesignedForFuture />
                <Technology />
                <Features />
                <Questions />
            </Layout>
        </div>
    )
}