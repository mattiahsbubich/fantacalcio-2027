function SettingsPage() {
  return (
    <section className="stack">
      <article className="panel">
        <h2>Dati locali</h2>
        <p>
          I dati saranno salvati sul dispositivo corrente e non verranno
          sincronizzati automaticamente con altri dispositivi.
        </p>
      </article>

      <article className="panel">
        <h2>Backup</h2>
        <p>Esportazione e importazione JSON verranno aggiunte in una fase dedicata.</p>
      </article>
    </section>
  );
}

export default SettingsPage;
