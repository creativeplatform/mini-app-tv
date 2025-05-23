"use client";

import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Player } from "./components/Player";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11 z-50 relative">
          <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <Player
            src={[
              {
                src: "ipfs://bafybeiaydmxxo3bv56mlh62c5wakcn3bmdohadrpx4swahguqvevny2x6m",
                type: "video",
                mime: "video/mp4",
                width: 1920,
                height: 1080,
              },
            ]}
            title="Sample Video"
          />
        </main>

        <footer className="mt-2 pt-4 flex justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
