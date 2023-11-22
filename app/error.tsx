"use client";
import React from "react";
import styles from "./error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <main className={styles["main"]}>
        <div className={styles["error-container"]}>
          <h1>Hopa! ERROR</h1>
          <p></p>
          <div className={styles["error-details"]}>
            <p>
              <strong>Fehlermeldung:</strong> {error.message}
            </p>
            {error.digest && (
              <p>
                <strong>Fehler-Digest:</strong> {error.digest}
              </p>
            )}
          </div>
          <p></p>

          <p></p>
          <p></p>
          <p></p>

          <button onClick={() => reset()}>Erneut versuchen</button>
        </div>
      </main>
    </>
  );
}
