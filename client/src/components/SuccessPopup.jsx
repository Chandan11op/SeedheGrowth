export default function SuccessPopup({ onClose }) {
  return (
    <div className="success-overlay" role="alertdialog" aria-modal="true" aria-labelledby="success-title">
      <div className="success-box">
        {/* Checkmark icon */}
        <div className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 26 26" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4,14 10,20 22,8" />
          </svg>
        </div>

        <div className="success-eyebrow">Submission Received</div>

        <h2 className="success-title" id="success-title">
          You're on our radar!
        </h2>

        <p className="success-body">
          Your response is submitted.{' '}
          <span>Our team will contact you within 24 hours.</span>
          <br /><br />
          Seedhi baat — no delays, no runaround.
        </p>

        <button
          className="success-close"
          onClick={onClose}
          id="success-close-btn"
        >
          Back to Site
        </button>
      </div>
    </div>
  )
}
