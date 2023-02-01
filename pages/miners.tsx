import Head from "next/head";
import { AppShell } from "@mantine/core";


export default function MinersPage() {
  return (
    <>
      <Head>
        <title>Storage Providers Analytics - MinerAnalytics</title>
        <meta name="description" content="Storage providers Analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell

        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
      </AppShell>
    </>
  );
}
