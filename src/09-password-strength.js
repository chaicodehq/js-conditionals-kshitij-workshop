/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  var criteriaCount = 0;
  var criteria = {
    upperCase : false,
    lowerCase : false,
    number : false,
    specialChar : false
  }

  if (password == null || typeof(password) == !String) {
    return "weak";
  }

  if (password.length >= 8) {
    criteriaCount++;
  }

  for (var i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      criteria.upperCase = true;
      continue;
    }
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      criteria.lowerCase = true;
      continue;
    }
    if (password.charAt(i) >= 0 && password.charAt(i) <= 9) {
      criteria.number = true;
      continue;
    }
    else criteria.specialChar = true;
  }

  for (const key in criteria) {
    if (criteria[key] == true) {
      criteriaCount ++;
    }
  }

  if (criteriaCount <= 1) {
    return "weak";
  } else if (criteriaCount <= 3) {
    return "medium"
  } else if (criteriaCount == 4) {
    return "strong";
  } else if (criteriaCount == 5) {
    return "very strong";
  }
}
