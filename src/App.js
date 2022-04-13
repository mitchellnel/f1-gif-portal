import React, { useEffect } from "react";
import twitterLogo from "./assets/twitter-logo.svg";
import "./App.css";

// Constants
const TWITTER_HANDLE = "nellari21";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
    // work out if a Phantom wallet has been found
    const checkIfWalletIsConnected = async () => {
        try {
            const { solana } = window;

            if (solana) {
                if (solana.isPhantom) {
                    console.log("Phantom wallet found!");
                }
            } else {
                console.log(
                    "Object solana not found... Perhaps you don't have a Phantom wallet?"
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    // when App mounts, check if we have a Phantom wallet connected
    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected();
        };

        window.addEventListener("load", onLoad);

        return () => window.removeEventListener("load", onLoad);
    }, []);

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🏎 F1 GIF Portal</p>
                    <p className="sub-text">
                        F1 GIFs living on the Solana blockchain 🏁
                    </p>
                </div>
                <div className="footer-container">
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src={twitterLogo}
                    />
                    <a
                        className="footer-text"
                        href={TWITTER_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default App;
