import Head from "next/head";
import MainLayout from "@/components/layout/mainLayout";
import AddNote from "@/components/addNote";
import NoteContent from "@/components/noteContent";
import { initialState } from "@/store";
import { globalReducer } from "@/store/reducers";
import { useReducer } from "react";
import { ApplicationCtx } from "@/store";
import Modal from "@/components/modal";
import styles from "@/styles/Note.module.scss";

export default function Home() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <>
      <Head>
        <title>Note App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <ApplicationCtx.Provider value={{ state, dispatch }}>
          <>
            {state.isModalOpen ? (
              <Modal />
            ) : (
              <main className={styles.main}>
                <MainLayout>
                  <NoteContent />
                </MainLayout>
              </main>
            )}
          </>
        </ApplicationCtx.Provider>
      </div>
    </>
  );
}
