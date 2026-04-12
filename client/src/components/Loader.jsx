import './Loader.css'

export default function Loader() {
  return (
    <div className="loader-overlay" role="status" aria-label="Loading…">
      <img
        src="/loader.png"
        alt="Seedhe Growth"
        className="loader-logo"
        draggable="false"
      />
      <div className="loader-dots" aria-hidden="true">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
    </div>
  )
}
