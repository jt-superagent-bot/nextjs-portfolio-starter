const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Your Name.
      <span style={{ float: 'right', display: 'inline-flex', gap: '16px' }}>
        <a href="/teams">团队年框</a>
        <a href="/feed.xml">RSS</a>
      </span>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
