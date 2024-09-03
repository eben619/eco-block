
import React, { useEffect, useState } from 'react';
import { Sdk, type CirclesConfig } from "@circles-sdk/sdk";
import { BrowserProviderContractRunner } from "@circles-sdk/adapter-ethers";


const adapter = new BrowserProviderContractRunner();
await adapter.init();

const circlesAddress = adapter.address
const sdk = new Sdk(chainConfig,adapter);

const AvatarComponent = () => {
    const [circlesAddress, setCirclesAddress] = useState<string | undefined>(undefined);
    const [sdk, setSdk] = useState<Sdk | undefined>(undefined);
    const [avatarType, setAvatarType] = useState<string>("Unknown");
    const [avatarAddress, setAvatarAddress] = useState<string>("");

    export const config: CirclesConfig = {
        circlesRpcUrl: "https://chiado-rpc.aboutcircles.com",
        pathfinderUrl: "https://chiado-pathfinder.aboutcircles.com",
        v2PathfinderUrl: "https://chiado-pathfinder.aboutcircles.com/pathfinder/",
        profileServiceUrl: "https://chiado-pathfinder.aboutcircles.com/profiles/",
        v1HubAddress: "0xdbf22d4e8962db3b2f1d9ff55be728a887e47710",
        v2HubAddress: "0xEddc960D3c78692BF38577054cb0a35114AE35e0",
        migrationAddress: "0x8C9BeAccb6b7DBd3AeffB5D77cab36b62Fe98882",
        nameRegistryAddress: "0x5525cbF9ad01a4E805ed1b40723D6377b336eCcf"
    };

    // Initialize SDK and set the circles address
    async function initializeSdk() {
        const adapter = new BrowserProviderContractRunner();
        await adapter.init();
        setCirclesAddress(adapter.address);
        setSdk(new Sdk(chainConfig, adapter));
    }

    // Initialize SDK when component mounts
    useEffect(() => {
        initializeSdk();
    }, []); // Empty dependency array to run only once on mount

    // Fetch avatar information when sdk and circlesAddress are available
    useEffect(() => {
        async function fetchAvatar() {
            if (sdk && circlesAddress) {
                const avatar = await sdk.getAvatar(circlesAddress);
                setAvatarType(avatar.avatarInfo?.type || "Unknown");
                setAvatarAddress(circlesAddress);
            }
        }

        fetchAvatar();
    }, [sdk, circlesAddress]); // Runs when either sdk or circlesAddress updates

    return (
        <p>
            Avatar {avatarAddress} is {avatarType}
        </p>
    );
};

export default AvatarComponent;
