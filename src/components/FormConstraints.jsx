import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PHONE_PATTERN = '^(\+91[ ]?)?[6-9][0-9]{4}[ ]?[0-9]{5}$';
const NAME_PATTERN = "^[A-Za-z][A-Za-z .'\-]{1,59}$";

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const setIfMissing = (el, attr, value) => {
  if (!el.hasAttribute(attr)) el.setAttribute(attr, value);
};

// Gives every booking/enquiry form field sensible browser-level constraints
// (phone format, name length, future-only dates, text limits) without each
// form having to repeat them.
function applyConstraints(root) {
  root.querySelectorAll('input, textarea').forEach((el) => {
    const type = (el.getAttribute('type') || 'text').toLowerCase();
    if (el.tagName === 'TEXTAREA') {
      setIfMissing(el, 'maxlength', '500');
    } else if (type === 'tel') {
      setIfMissing(el, 'inputmode', 'tel');
      setIfMissing(el, 'autocomplete', 'tel');
      setIfMissing(el, 'maxlength', '14');
      setIfMissing(el, 'pattern', PHONE_PATTERN);
      setIfMissing(el, 'title', 'Enter a valid 10-digit Indian mobile number (e.g. 98765 43210)');
    } else if (type === 'date') {
      const label = (el.closest('div')?.querySelector('label')?.textContent || '').toLowerCase();
      const isReturn = label.includes('return');
      el.setAttribute('min', isReturn ? (el.closest('form')?.querySelector('input[type="date"]')?.value || todayISO()) : todayISO());
    } else if (type === 'text') {
      const hint = `${el.getAttribute('placeholder') || ''} ${el.closest('div')?.querySelector('label')?.textContent || ''}`.toLowerCase();
      const isName = /\bname\b/.test(hint);
      setIfMissing(el, 'maxlength', '60');
      if (isName) {
        setIfMissing(el, 'autocomplete', 'name');
        setIfMissing(el, 'pattern', NAME_PATTERN);
        setIfMissing(el, 'title', 'Use 2-60 letters (spaces, dots, hyphens allowed)');
      } else {
        setIfMissing(el, 'minlength', '2');
      }
    }
  });
}

export default function FormConstraints() {
  const location = useLocation();

  useEffect(() => {
    applyConstraints(document);
    const observer = new MutationObserver(() => applyConstraints(document));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location.pathname]);

  // Keep the "return date" minimum in step with the chosen travel date.
  useEffect(() => {
    const onChange = (e) => {
      if (e.target?.type !== 'date') return;
      const form = e.target.closest('form');
      const dates = form ? [...form.querySelectorAll('input[type="date"]')] : [];
      if (dates.length > 1 && dates[0] === e.target) dates[1].setAttribute('min', e.target.value || todayISO());
    };
    document.addEventListener('change', onChange);
    return () => document.removeEventListener('change', onChange);
  }, []);

  return null;
}
