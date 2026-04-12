import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM  = { name: '', email: '', contact: '', query: '' }
const INITIAL_ERRORS = { name: '', email: '', contact: '', query: '' }

export default function LeadModal({ onClose, onSuccess }) {
  const [form,    setForm]    = useState(INITIAL_FORM)
  const [errors,  setErrors]  = useState(INITIAL_ERRORS)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  /* ── Field change ─────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (apiError) setApiError('')
  }

  /* ── Validation ───────────────────────────────────────── */
  const validate = () => {
    const next = { ...INITIAL_ERRORS }
    let ok = true

    if (!form.name.trim()) {
      next.name = 'Name is required.'; ok = false
    }
    if (!form.email.trim()) {
      next.email = 'Email is required.'; ok = false
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'; ok = false
    }
    if (!form.contact.trim()) {
      next.contact = 'Contact number is required.'; ok = false
    }
    if (!form.query.trim()) {
      next.query = 'Please tell us a bit about what you need.'; ok = false
    }

    setErrors(next)
    return ok
  }

  /* ── Submit ───────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setApiError('')

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim(),
          contact: form.contact.trim(),
          query:   form.query.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      // Success! Let parent swap to success popup
      onSuccess()
    } catch (err) {
      setApiError(err.message || 'Could not submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  /* ── Overlay click-to-close ───────────────────────────── */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
          id="modal-close-btn"
        >
          ×
        </button>

        <div className="modal-eyebrow">Free Strategy Call</div>
        <h2 className="modal-title" id="modal-title">
          Let's talk about<br />
          <span>your growth.</span>
        </h2>

        <form onSubmit={handleSubmit} noValidate id="lead-form">
          {/* Name */}
          <div className="form-group">
            <label htmlFor="lead-name">Your Name *</label>
            <input
              id="lead-name"
              name="name"
              type="text"
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              autoComplete="name"
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="lead-email">Email Address *</label>
            <input
              id="lead-email"
              name="email"
              type="email"
              placeholder="rahul@yourbrand.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              autoComplete="email"
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          {/* Contact */}
          <div className="form-group">
            <label htmlFor="lead-contact">Contact Number *</label>
            <input
              id="lead-contact"
              name="contact"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.contact}
              onChange={handleChange}
              className={errors.contact ? 'error' : ''}
              autoComplete="tel"
            />
            {errors.contact && <div className="field-error">{errors.contact}</div>}
          </div>

          {/* Query */}
          <div className="form-group">
            <label htmlFor="lead-query">Service Summary / Query *</label>
            <textarea
              id="lead-query"
              name="query"
              placeholder="Tell us about your brand and what kind of growth you're looking for…"
              value={form.query}
              onChange={handleChange}
              className={errors.query ? 'error' : ''}
              rows={4}
            />
            {errors.query && <div className="field-error">{errors.query}</div>}
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={loading}
            id="lead-form-submit-btn"
          >
            {loading ? 'Submitting…' : 'Book My Free Call →'}
          </button>

          {apiError && <div className="submit-error">{apiError}</div>}
        </form>
      </div>
    </div>
  )
}
